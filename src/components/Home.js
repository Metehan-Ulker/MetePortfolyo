import React from "react";
import { motion } from "framer-motion"; // 👈 Framer Motion importu
import "./Home.css";

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <motion.h1
                    className="greeting"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}

                >
                    Merhaba, ben <span className="highlight">Metehan Ülker</span>
                </motion.h1>

                <motion.h2
                    className="title animate-fade"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}

                >
                    {/* Buraya bir başlık da ekleyebilirsin */}
                </motion.h2>

                <motion.p
                    className="description animate-slide"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}

                >
                    Bu sektörde Yaklaşık 2 yıldır Deneyim kazanan birisiyim.
                </motion.p>

                <motion.a
                    href="#contact"
                    className="cta-button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}

                >
                    İletişime Geç
                </motion.a>
            </div>
        </section>
    );
};

export default Home;
