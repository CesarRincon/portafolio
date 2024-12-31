import React, { useEffect } from "react";
import style from "./Toast.module.css";

export const Toast = ({ showToast, setShowToast }) => {
  const { message, show, type } = showToast;
  const handleCloseToast = () => {
    setTimeout(() => {
      setShowToast({ message: "", show: false, type: "success" });
    }, 5000);
  };

  useEffect(() => {
    if (show) handleCloseToast();
  }, [show]);

  const styles =
    type === "success" ? style.containerToast : style.containerToastError;

  return (
    show && (
      <div
        className={styles}
        onClick={() =>
          setShowToast({ message: "", show: false, type: "success" })
        }
      >
        <p>{message}</p>
      </div>
    )
  );
};
