import s from "./Grain.module.css";

/*
 * Grano de película sobre toda la página. Va en un elemento fijo sin eventos:
 * nunca sobre contenedores que hagan scroll, para no repintar en cada frame.
 */
export const Grain = () => <div className={s.grain} aria-hidden="true" />;
