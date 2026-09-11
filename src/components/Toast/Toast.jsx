import { useCallback, useEffect } from "react";
import style from "./Toast.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { FiAlertCircle, FiCheckCircle, FiX } from "react-icons/fi";

export const Toast = ({ showToast, setShowToast }) => {
  const { t } = useLang();
  const { message, show, type } = showToast;
  const isError = type !== "success";

  const close = useCallback(
    () => setShowToast({ message: "", show: false, type: "success" }),
    [setShowToast],
  );

  useEffect(() => {
    if (!show) return undefined;
    /*
     * Un error no se retira solo: quien lo provocó necesita tiempo para leerlo
     * y decidir. El de éxito sí se va, porque no exige ninguna acción.
     */
    if (isError) return undefined;
    const timer = setTimeout(close, 5000);
    return () => clearTimeout(timer);
  }, [show, message, isError, close]);

  if (!show) return null;

  return (
    <div
      className={`${style.toast} ${isError ? style.error : style.success}`}
      /*
       * Los errores se anuncian con prioridad de interrupción; las
       * confirmaciones, con cortesía. Anunciar un fallo como "status" hacía que
       * un lector de pantalla lo tratara igual que un "listo".
       */
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      <span className={style.icon} aria-hidden="true">
        {isError ? <FiAlertCircle /> : <FiCheckCircle />}
      </span>
      <p className={style.message}>{message}</p>
      <button
        type="button"
        onClick={close}
        className={style.close}
        aria-label={t.contact.closeToast}
      >
        <FiX />
      </button>
    </div>
  );
};
