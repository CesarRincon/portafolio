import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Landing from "../../pages/Landing/Landing";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Works from "../Works/Works";
import { AnimatePresence } from 'framer-motion'
import Pages from "../../pages/front/Pages";
import Technologies from "../Technologies/Technologies";


export default function AnimateRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Pages />} />
                <Route path='/technologies' element={<Technologies />} />
                <Route path='/works' element={<Works />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}
