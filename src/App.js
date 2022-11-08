import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import NotFound from './components/NotFound/NotFound';
import Works from './components/Works/Works';
import About from './components/About/About';
import Home from './pages/Home/Home';
import AnimateRoutes from './components/AnimatedRoutes/AnimateRoutes';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <AnimateRoutes/>
    </div>

  );
}

export default App;
