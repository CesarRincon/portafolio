import React from 'react'
import s from './About.module.css'

export default function About() {
  return (
    <div className={s.container}>
      <h1 style={{ color: "white" }}>About</h1>
      <main className={s.contain}>
        <section className={s.aboutText}>
          <p>Full Stack Web Developer, con conocimiento en tecnologías como Javascript, NodeJS, React, Redux, MongoDB, Postgres, Python, entre otras. <br /><br />

            Desde pequeño siempre me gusto la programación, recuerdo mis primeras líneas en HTML a los 11 o 12 años de edad. Desde entonces he estado en la búsqueda de aprender más sobre este mundo, fui aprendiendo de Java luego javascript y así fui avanzando al sol de hoy, donde ya he hecho proyectos con React, Node y Python e incluso aplicaciones con Java. <br /><br />

            Me considero una persona con gran adaptabilidad, capacidad de trabajar en equipo, empatía, aprendizaje rápido, pensamiento analítico y resolución de problemas los cuales me han ayudado a ofrecer lo mejor de mí en proyectos grupales e individuales.</p>
        </section>
        <section className={s.aboutImg}>
          images
        </section>
      </main>
    </div>
  )
}
