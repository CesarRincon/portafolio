import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Splashscreen from "./components/SplashScreen/Splashscreen";
import "@fontsource/montserrat";
import "@fontsource/bebas-neue";
import "@fontsource/raleway";
import Sections from "./pages/sections/Sections";
import Hero from "./pages/hero/Hero";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Services } from "./pages/Services/Services";
import { Recommendations } from "./pages/Recommendations/Recommendations";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Splashscreen setIsLoading={setIsLoading} />
  ) : (
    <div className={styles.container}>
      <Hero id="hero" />
      <Services id="services" />
      <div style={{ overflow: "hidden" }}>
        <Sections />
      </div>
      <Recommendations />
    </div>
  );
}

export default App;
// {
//   /* <div
//       id="rebaja"
//       className="section"
//       style={{ height: "100%", backgroundColor: "purple", width: "100%" }}
//     >
//       asd
//     </div> */
// }
// {
//   /* {isLoading ? (
//     <Splashscreen setIsLoading={setIsLoading} />
//   ) : ( */
// }
// {
//   /* <div className={styles.container}>
//     <Navbar setFlip={setFlip} setScreen={setScreen} screen={screen} />
//     {RenderPage(props)}

//     <Toast showToast={showToast} setShowToast={setShowToast} />
//   </div> */
// }
// {
//   /* )} */
// }
