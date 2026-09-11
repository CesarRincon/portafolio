import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReduced, sel } from "../../lib/gsap";
import s from "./Work.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { CineHeading } from "../../components/CineHeading/CineHeading";
import { PhoneMockup } from "../../components/PhoneMockup/PhoneMockup";
import { appProjects, featuredProjects } from "../../data/projects";
import iconAppStore from "../../images/appstore.png";
import iconPlayStore from "../../images/googleplay.png";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const StoreLinks = ({ stores, name }) => (
  <div className={s.stores}>
    <a href={stores.android} target="_blank" rel="noreferrer" aria-label={`${name} — Google Play`}>
      <img src={iconPlayStore} alt="Google Play" width="128" height="45" loading="lazy" />
    </a>
    <a href={stores.ios} target="_blank" rel="noreferrer" aria-label={`${name} — App Store`}>
      <img src={iconAppStore} alt="App Store" width="128" height="45" loading="lazy" />
    </a>
  </div>
);

/* Tarjeta tipo "edición": la portada se inclina en 3D siguiendo al puntero. */
const Edition = ({ project, lang, labels }) => {
  const copy = project[lang];

  const onPointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${(-y * 9).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const onPointerLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      className={s.edition}
      style={{ "--project-accent": project.accent }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className={s.cover}>
        {project.wip ? (
          <div className={s.wipCover}>
            <img src={project.logo} alt="" className={s.wipLogo} loading="lazy" />
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.name}: ${copy.tagline}`}
            className={s.coverImg}
            loading="lazy"
            decoding="async"
          />
        )}
        <span className={s.coverShine} aria-hidden="true" />
        <span className={s.coverEdge} aria-hidden="true" />
      </div>

      <div className={s.editionBody}>
        <h3 className={s.editionName}>{project.name}</h3>
        <p className={s.editionTagline}>{copy.tagline}</p>

        <ul className={s.highlights}>
          {copy.highlights.map((item) => (
            <li key={item}>
              <FiCheck aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <ul className={s.tags}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={s.editionFoot}>
          <span className={s.year}>{project.year}</span>
          {project.wip ? (
            <span className={s.wipBadge}>
              <span className={s.wipDot} aria-hidden="true" />
              {labels.inProgress}
            </span>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={s.visit}
              aria-label={`${project.name}: ${labels.liveLabel}`}
            >
              {labels.liveLabel}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Work = () => {
  const { t, lang } = useLang();
  const { work } = t;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const q = gsap.utils.selector(root);

      /* Las ediciones suben del suelo, una tras otra. */
      gsap.from(q(`${sel(s.edition)}`), {
        y: 70,
        opacity: 0,
        scale: 0.94,
        duration: 1.3,
        stagger: 0.16,
        scrollTrigger: { trigger: q(`${sel(s.editions)}`), start: "top 80%", once: true },
      });

      /* Cada app entra desde el desenfoque al asomar. */
      q(`${sel(s.showcase)}`).forEach((node) => {
        gsap.from(node, {
          y: 60,
          opacity: 0,
          filter: "blur(10px)",
          duration: 1.3,
          scrollTrigger: { trigger: node, start: "top 82%", once: true },
        });
      });

      /* El título del bloque de apps se queda fijo mientras la galería desfila. */
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const sticky = q(`${sel(s.appsSticky)}`)[0];
        const list = q(`${sel(s.appList)}`)[0];
        gsap.to(sticky, {
          y: () => list.offsetHeight - sticky.offsetHeight,
          ease: "none",
          scrollTrigger: {
            trigger: sticky,
            start: "top 120px",
            endTrigger: list,
            end: () => `bottom ${120 + sticky.offsetHeight}px`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [lang] },
  );

  return (
    <section id="work" ref={root} className={s.section}>
      <div className={s.stars} aria-hidden="true" />

      <div className="shell">
        <CineHeading title={work.title} lead={work.lead} />

        <div className={s.editions}>
          {featuredProjects.map((project) => (
            <Edition key={project.id} project={project} lang={lang} labels={work} />
          ))}
        </div>
      </div>

      <div className={`${s.apps} shell`}>
        <div className={s.appsTitleCol}>
          <div className={s.appsSticky}>
            <h3 className={s.appsTitle}>{work.allApps}</h3>
            <p className={s.appsLead}>{work.appsLead}</p>
          </div>
        </div>

        <div className={s.appList}>
          {appProjects.map((app) => (
            <article
              key={app.id}
              className={s.showcase}
              style={{ "--project-accent": app.accent }}
            >
              <div className={s.showcaseMockup}>
                <span className={s.showcaseGlow} aria-hidden="true" />
                <PhoneMockup screens={app.screens} label={app.name} />
              </div>
              <div className={s.showcaseBody}>
                <h4 className={s.showcaseName}>{app.name}</h4>
                <p className={s.editionTagline}>{app[lang].tagline}</p>
                <p className={s.description}>{app[lang].description}</p>
                <ul className={s.tags}>
                  {app.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <StoreLinks stores={app.stores} name={app.name} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
