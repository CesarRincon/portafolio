import s from "./BrowserMockup.module.css";

/** Marco de navegador para presentar la captura de un sitio en producción. */
export const BrowserMockup = ({ src, alt, url, accent }) => {
  const host = url.replace(/^https?:\/\//, "");

  return (
    <div className={s.window} style={accent ? { "--project-accent": accent } : undefined}>
      <div className={s.bar}>
        <span className={s.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={s.url}>{host}</span>
      </div>
      <div className={s.viewport}>
        <img src={src} alt={alt} className={s.shot} loading="lazy" />
      </div>
    </div>
  );
};
