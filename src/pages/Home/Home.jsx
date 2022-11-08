import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { motion } from "framer-motion"
import s from './Home.module.css'


export default function Home() {
  return (
    <motion.div intial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className={s.container}>
      <main>
        <h1 style={{color:"white"}}>Home</h1>
      </main>
    </motion.div>
  )
}
