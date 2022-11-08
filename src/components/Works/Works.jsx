import React from 'react'
import Navbar from '../Navbar/Navbar'
import s from './Works.module.css'
import { motion } from "framer-motion"

export default function Works() {
  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth}} className={s.containerW}>
      <h1 style={{color: "white"}}>Works</h1>
    </motion.div>
  )
}
