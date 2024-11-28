import { useState } from "react";
import styles from "./App.module.css";
import Splashscreen from "./components/SplashScreen/Splashscreen";
import { RenderPage } from "./components/renderPage/RenderPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState("home");
  const [flip, setFlip] = useState(true);

  const props = { flip, screen };


  return (
    <>
      {isLoading ? (
        <Splashscreen setIsLoading={setIsLoading} />
      ) : (
        <div className={styles.container}>
          <Navbar setFlip={setFlip} setScreen={setScreen} screen={screen} />
          {RenderPage(props)}
        </div>
      )}
    </>
  );
}

export default App;
