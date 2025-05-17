import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

import './styles/animations.css';

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6,
};

export default function App() {
    return (
        <>
            <Navbar />
            <motion.main
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/arkaplanresim.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
            >
                <Home />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
                <SocialLinks />
                <Footer />
            </motion.main>
        </>
    );
}
