import { useCallback, useState } from "react";
import styles from "./App.module.css";
import Splashscreen from "./components/SplashScreen/Splashscreen";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Toast } from "./components/Toast/Toast";
import { Grain } from "./components/Grain/Grain";
import { SmoothScroll } from "./components/SmoothScroll/SmoothScroll";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Work } from "./sections/Work/Work";
import { Stack } from "./sections/Stack/Stack";
import { Experience } from "./sections/Experience/Experience";
import { Contact } from "./sections/Contact/Contact";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  // Si entran por un enlace directo a una sección, la cortina sobra.
  const [isLoading, setIsLoading] = useState(() => !window.location.hash);
  const [showToast, setShowToast] = useState({
    message: "",
    show: false,
    type: "success",
  });

  const handleSplashDone = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isLoading && <Splashscreen onDone={handleSplashDone} />}

        {!isLoading && (
          <div className={styles.app}>
            <Navbar />
            <SmoothScroll>
              <main>
                <Hero />
                <About />
                <Work />
                <Stack />
                <Experience />
                <Contact setShowToast={setShowToast} />
              </main>
              <Footer />
            </SmoothScroll>
            <Grain />
          </div>
        )}

        <Toast showToast={showToast} setShowToast={setShowToast} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
