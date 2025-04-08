import React from "react";
import { RecommendationCard } from "../../components/RecomendationCard/RecomendationCard";
import style from "./Recommendations.module.css";

const recommendations = [
  {
    name: "Lizeth K. Manchego",
    title: "Teach Lead",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEtr6EJRH4qIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1589730581069?e=1749686400&v=beta&t=C9aT6rnWaSkC1bvEKGm7DyfUoRctadeF2gYR6Aag0nY",
    text: "Tuve el privilegio de ser la líder técnico de César, durante dos años, y puedo afirmar sin duda que es uno de los desarrolladores móviles más talentosos con los que he trabajado. Su capacidad técnica es excepcional, pero lo que realmente distingue a César es su combinación única de creatividad, compromiso y espíritu colaborativo. \n\n Lo que más valoro de César es su capacidad para enfrentar desafíos complejos con una actitud positiva y su disposición a compartir conocimientos con el equipo. Cualquier organización que busque un desarrollador que aporte tanto técnicamente como a la cultura del equipo encontrará en César un recurso invaluable. \n\nEs con gran orgullo que recomiendo a César y estoy segura de que seguirá impresionando a todos con quienes colabore en el futuro.",
    skills: [
      "FullStack Developer",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "React JS",
      "React Native",
      "Git",
      "MySQL",
      "PostgreSQL",
      "SQLServer",
    ],
  },
  {
    name: "Lucas Luzzani",
    title: "Frontend Developer Semisenior",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHHG2o4O7MHQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667850783005?e=1749686400&v=beta&t=Io0p2dUCP4b83UUuSdnFUUlDVyY_J1uzEETyGW63v28",
    text: "Tuve el placer de trabajar con César en varios proyectos de desarrollo frontend, y siempre me sorprendió su compromiso, atención al detalle y capacidad para encontrar soluciones simples a problemas complejos. Es una persona proactiva, con gran disposición para colaborar y mejorar continuamente. Sin duda, es un gran valor para cualquier equipo de desarrollo.",
    skills: ["React Native", "React", "JavaScript", "HTML", "CSS"],
  },
];

export const Recommendations = () => {
  return (
    <div className={style.section} id="recommendations">
      <h2 className={style.sectionTitle}>Colaboraciones destacadas</h2>
      {recommendations.map((recommendation, index) => (
        <RecommendationCard key={recommendation.name} {...recommendation} />
      ))}
    </div>
  );
};
