import s from "./SectionHeading.module.css";
import { Reveal } from "../Reveal/Reveal";

export const SectionHeading = ({ eyebrow, title, lead, align = "left" }) => (
  <header className={`${s.head} ${align === "center" ? s.center : ""}`}>
    <Reveal variant="up">
      <p className={s.eyebrow}>
        <span className={s.rule} aria-hidden="true" />
        {eyebrow}
      </p>
    </Reveal>
    <Reveal variant="mask" delay={90}>
      <h2 className={s.title}>{title}</h2>
    </Reveal>
    {lead && (
      <Reveal variant="up" delay={180}>
        <p className={s.lead}>{lead}</p>
      </Reveal>
    )}
  </header>
);
