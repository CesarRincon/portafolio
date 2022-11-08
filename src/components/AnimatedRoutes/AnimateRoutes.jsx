import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Landing from "../../pages/Landing/Landing";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Works from "../Works/Works";
import { AnimatePresence } from 'framer-motion'


export default function AnimateRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Landing />} />
                <Route path='/home' element={<Home />} />
                <Route path='/works' element={<Works />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}
