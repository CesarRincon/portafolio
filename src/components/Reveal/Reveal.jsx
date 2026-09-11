import { useReveal } from "../../hooks/useReveal";
import style from "./Reveal.module.css";

/**
 * Envoltorio de animación de entrada.
 * variant: up | left | right | scale | mask
 */
export const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style: styleProp,
  ...rest
}) => {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${style.reveal} ${style[variant]} ${isVisible ? style.visible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...styleProp }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
