import { useState } from "react";
import styles from "./App.module.css";
import Splashscreen from "./components/SplashScreen/Splashscreen";
import "@fontsource/montserrat";
import "@fontsource/bebas-neue";
import "@fontsource/raleway";
import Sections from "./pages/sections/Sections";
import Hero from "./pages/hero/Hero";
import { Services } from "./pages/Services/Services";
import { Recommendations } from "./pages/Recommendations/Recommendations";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Splashscreen setIsLoading={setIsLoading} />
  ) : (
    <div className={styles.container}>
      <Hero />
      <Services  />
      <Sections />
      <Recommendations />
      <Contact />
    </div>
  );
}

export default App;

