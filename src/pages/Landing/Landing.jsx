import Navbar from "../../components/Navbar/Navbar";
import style from "./Landing.module.css";
import { motion } from "framer-motion";
import Particle from "../../components/Particles/Particle";

export default function Landing() {
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      style={{ height: "100%" }}
    >
      <Particle />
      <div className={style.landing}>
        <div className={style.container}>
          <div className={style.leftMenuContainer}>
            <div className={style.items}>1</div>
            <div className={style.items}>2</div>
            <div className={style.items}>3</div>
          </div>
          <div className={style.contentContainer}>
            <div className={style.containerDescription}>
              <div className={style.aboutMeContainer}></div>
              <div className={style.aboutMeContainer}></div>
              <div className={style.contentDescription}></div>
            </div>
            <div className={style.imageContainer}>
              <div className={style.imageContent}>
                <img
                  src="https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_dcf5c9c18fe578f354ce9a4fe609e4cc.jpg?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1727470558&Signature=3%2Bv90AW%2Bb94xYlklwWpg7gDGJmo%3D"
                  alt="CesarRincon"
                  className={style.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={s.landing}>
                <div className={`${s.sideLeft} ${s.sides}`}>
                    <h1>Full Stack Developer</h1>
                    <p>
                        Hello! My name is <b>César Rincón</b>, im full stack web developer. <br />
                        Feel free to take a look at my latest projects on the web portfolio page.
                    </p>
                    <p></p>
                </div>
                <div className={`${s.sideRigth} ${s.sides}`}>
                    <div className={`${s.photo} ${s.photoF}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${s.photo} ${s.photoS}`}>

                    </div>
                </div>
            </div> */}
    </motion.div>
  );
}
