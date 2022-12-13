import Navbar from '../../components/Navbar/Navbar'
import s from './Landing.module.css'
import { motion } from "framer-motion"
import Particle from '../../components/Particles/Particle'
import Home from '../Home/Home'


export default function Landing() {

    


    return (
        <motion.div intial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}>
            <Particle/>
            <div className={s.landing}>
                <div className={`${s.sideLeft} ${s.sides}`}>
                    <h1>Full Stack Developer</h1>
                    <p>
                        Hello! My name is <b>César Rincón</b>, im full stack web developer. <br />
                        Feel free to take a look at my latest projects on the web portfolio page.
                    </p>
                    <p></p>
                </div>
                <div className={`${s.sideRigth} ${s.sides}`}>
                    <div className={`${s.photo} ${s.photoF}`}>
                        <img src="" alt="" />
                    </div>
                    <div className={`${s.photo} ${s.photoS}`}>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}
