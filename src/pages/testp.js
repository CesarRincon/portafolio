import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PortfolioLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#1a202c",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          position: "relative",
        }}
      >
        <motion.h1
          style={{ fontSize: "4rem", fontWeight: "bold" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Hola! Soy [Tu Nombre]
        </motion.h1>
        <motion.p
          style={{ fontSize: "1.25rem", marginTop: "1rem" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Desarrollador Frontend | React | UX/UI
        </motion.p>
      </section>

      {/* Parallax Section */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            fontSize: "2rem",
            fontWeight: "bold",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          Parallax Effect
        </motion.div>
      </section>
    </div>
  );
}
