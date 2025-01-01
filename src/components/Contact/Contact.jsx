import React, { useRef, useState } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import persornInPC from "../../images/personaenpc.jpg"

export const Contact = (props) => {
  const { flip, setShowToast } = props;
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const publicKey = "mE5Uf6j4E-y69yCmS";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const name = formRef.current.elements?.["from_name"].value;

    const subject = formRef.current.elements?.["user_subject"].value;

    const email = formRef.current.elements?.["user_email"].value;

    const message = formRef.current.elements?.["message"].value;

    if (!name || !subject || !email || !message) {
      setShowToast({
        message: "Please fill in all the fields!",
        show: true,
        type: "error",
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_tut529j",
        "template_2hk3los",
        formRef.current,
        publicKey,
      );
      console.log(result.text);
      setShowToast({
        message: "The message has been sent successfully!",
        show: true,
        type: "success",
      });
      document.getElementById("form").reset();
    } catch (error) {
      console.log(error.text);
    }
    setIsLoading(false);
  };

  const [styles, setStyles] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * -2;

    setStyles({
      transform: `rotateX(${y * 45}deg) rotateY(${x * 45}deg)`,
    });
  };

  return (
    <section className={`${style.container} ${flip ? style.flip : ""}`}>
      <div className={style.content}>
        <div className={style.imageContent}>
          <img
            src={persornInPC}
            alt="person"
            className={style.image}
          />
        </div>
        <form
          onMouseMove={handleMouseMove}
          ref={formRef}
          onSubmit={handleSubmit}
          id="form"
          className={style.form}
        >
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/boy_light-skin-tone_1f466-1f3fb_1f3fb.png"
            alt="3D face"
            className={style.animatedFace}
            style={{
              ...styles,
            }}
          />
          <h2 className={style.title}>Write to me</h2>
          <input
            className={style.input}
            type="text"
            placeholder="Name"
            name="from_name"
          />
          <input
            className={style.input}
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <input
            className={style.input}
            type="text"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            className={style.textarea}
            name="message"
            id=""
            rows="5"
            placeholder="Write to message"
          />
          <button className={style.buttonSubmit}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};
