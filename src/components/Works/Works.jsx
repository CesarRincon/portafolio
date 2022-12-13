import React from 'react'
import Navbar from '../Navbar/Navbar'
import s from './Works.module.css'
import { motion } from "framer-motion"

export default function Works() {
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} className={s.containerW}>
      <h1>Works</h1>
      <main>
        <div className={s.item}>
          <h2>Proyecto individual Henry</h2>
          <iframe src="https://cesarr-countries.vercel.app/" frameborder="0"></iframe>
        </div>
        <div className={s.item}>
          <h2>Proyecto Final Henry</h2>
          <iframe src="https://finalproject-one.vercel.app/" frameborder="0"></iframe>
        </div>
        <div className={s.item}>
          <h2>Portafolio</h2>
          <iframe src="https://cesarrincon.vercel.app/" frameborder="0"></iframe>
        </div>
      </main>
    </motion.div>
  )
}
