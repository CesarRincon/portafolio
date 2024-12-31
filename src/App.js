import { useState } from "react";
import styles from "./App.module.css";
import Splashscreen from "./components/SplashScreen/Splashscreen";
import { RenderPage } from "./components/renderPage/RenderPage";
import Navbar from "./components/Navbar/Navbar";
import { Toast } from "./components/Toast/Toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState("home");
  const [flip, setFlip] = useState(true);
  const [showToast, setShowToast] = useState({
    message: "The message has been sent successfully!",
    show: false,
    type: "success",
  });

  const props = { flip, screen, setShowToast };

  return (
    <>
      {isLoading ? (
        <Splashscreen setIsLoading={setIsLoading} />
      ) : (
        <div className={styles.container}>
          <Navbar setFlip={setFlip} setScreen={setScreen} screen={screen} />
          {RenderPage(props)}

          <Toast showToast={showToast} setShowToast={setShowToast} />
        </div>
      )}
    </>
  );
}

export default App;
