import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import s from "./Contact.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { SOCIALS } from "../../i18n/content";
import { CineHeading } from "../../components/CineHeading/CineHeading";
import { Reveal } from "../../components/Reveal/Reveal";
import { FiArrowUpRight, FiCheck, FiCheckCircle, FiCopy, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const EMAILJS = {
  service: "service_tut529j",
  template: "template_2hk3los",
  publicKey: "mE5Uf6j4E-y69yCmS",
};

const FIELDS = [
  { name: "from_name", key: "name", type: "text", autoComplete: "name" },
  { name: "user_email", key: "email", type: "email", autoComplete: "email" },
  { name: "user_subject", key: "subject", type: "text" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Contact = ({ setShowToast }) => {
  const { t } = useLang();
  const { contact } = t;
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const notify = (message, type) => setShowToast({ message, show: true, type });

  /*
   * Valida un solo campo. Devuelve el mensaje de error o cadena vacía.
   * Se usa tanto al enviar como al salir del campo (onBlur), para que el
   * visitante corrija sobre la marcha y no al final de todo.
   */
  const validateField = (name, rawValue) => {
    const value = rawValue.trim();
    if (!value) return contact.errors[name];
    if (name === "user_email" && !EMAIL_RE.test(value)) return contact.errors.invalidEmail;
    return "";
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const message = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Al escribir borramos el error del campo: castigar mientras se corrige es hostil.
  const handleInput = (event) => {
    const { name } = event.target;
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const names = [...FIELDS.map((f) => f.name), "message"];

    const nextErrors = {};
    names.forEach((name) => {
      const message = validateField(name, form.elements[name].value);
      if (message) nextErrors[name] = message;
    });

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      // El foco va al primer campo con problema: el error deja de ser una adivinanza.
      const firstInvalid = names.find((name) => nextErrors[name]);
      form.elements[firstInvalid]?.focus();
      return;
    }

    setErrors({});
    setIsLoading(true);
    try {
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form, EMAILJS.publicKey);
      setSent(true);
      form.reset();
    } catch (error) {
      notify(contact.failure, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      notify(SOCIALS.email, "success");
    }
  };

  const describedBy = (name) => (errors[name] ? `${name}-error` : undefined);

  return (
    <section id="contact" className={s.section}>
      <div className="shell">
        <CineHeading title={contact.title} lead={contact.lead} />

        <div className={s.grid}>
          <Reveal variant="up" className={s.formCol}>
            {sent ? (
              /*
               * Estado de éxito persistente: sustituye al toast efímero. El
               * visitante acaba de escribir cuatro campos; merece una prueba
               * que siga en pantalla cuando levante la vista.
               */
              <div className={s.sent} role="status">
                <span className={s.sentIcon} aria-hidden="true">
                  <FiCheckCircle />
                </span>
                <p className={s.sentTitle}>{contact.sentTitle}</p>
                <p className={s.sentBody}>{contact.sentBody}</p>
                <button type="button" className={s.sentAgain} onClick={() => setSent(false)}>
                  {contact.sentAgain}
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={s.form} noValidate>
                <div className={s.fieldRow}>
                  {FIELDS.slice(0, 2).map((field) => (
                    <div className={s.field} key={field.name}>
                      <input
                        className={`${s.input} ${errors[field.name] ? s.inputInvalid : ""}`}
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder=" "
                        required
                        aria-required="true"
                        aria-invalid={errors[field.name] ? "true" : undefined}
                        aria-describedby={describedBy(field.name)}
                        onBlur={handleBlur}
                        onInput={handleInput}
                      />
                      <label className={s.label} htmlFor={field.name}>
                        {contact[field.key]}
                      </label>
                      {errors[field.name] && (
                        <p className={s.error} id={`${field.name}-error`} role="alert">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className={s.field}>
                  <input
                    className={`${s.input} ${errors.user_subject ? s.inputInvalid : ""}`}
                    id="user_subject"
                    name="user_subject"
                    type="text"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-invalid={errors.user_subject ? "true" : undefined}
                    aria-describedby={describedBy("user_subject")}
                    onBlur={handleBlur}
                    onInput={handleInput}
                  />
                  <label className={s.label} htmlFor="user_subject">
                    {contact.subject}
                  </label>
                  {errors.user_subject && (
                    <p className={s.error} id="user_subject-error" role="alert">
                      {errors.user_subject}
                    </p>
                  )}
                </div>

                <div className={s.field}>
                  <textarea
                    className={`${s.input} ${s.textarea} ${errors.message ? s.inputInvalid : ""}`}
                    id="message"
                    name="message"
                    rows="5"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={describedBy("message")}
                    onBlur={handleBlur}
                    onInput={handleInput}
                  />
                  <label className={s.label} htmlFor="message">
                    {contact.message}
                  </label>
                  {errors.message && (
                    <p className={s.error} id="message-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className={s.submit} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className={s.spinner} aria-hidden="true" />
                      {contact.sending}
                    </>
                  ) : (
                    <>
                      <FiSend aria-hidden="true" />
                      {contact.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal variant="up" delay={120} className={s.asideCol}>
            <p className={s.asideLabel}>{contact.directLabel}</p>

            <button type="button" className={s.emailCard} onClick={copyEmail}>
              <FiMail className={s.emailIcon} aria-hidden="true" />
              <span className={s.emailValue}>{SOCIALS.email}</span>
              <span className={s.emailAction}>
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? contact.copied : contact.copy}
              </span>
            </button>

            <ul className={s.links}>
              <li>
                <a href={SOCIALS.github} target="_blank" rel="noreferrer" className={s.link}>
                  <FiGithub aria-hidden="true" />
                  GitHub
                  <FiArrowUpRight className={s.linkArrow} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className={s.link}>
                  <FiLinkedin aria-hidden="true" />
                  LinkedIn
                  <FiArrowUpRight className={s.linkArrow} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
