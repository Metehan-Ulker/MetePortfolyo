import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }} // Her scrollda tekrar oynar
                >
                    <img src="/profil.jpg" alt="Benim Fotoğrafım" />
                </motion.div>
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: false }}
                    >
                        Ben Kimim?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: false }}
                    >
                        Merhaba! Ben Metehan. 25 Haziran 2003 tarihinde Aydında doğdum. Balıkesir Bilgisayar Mühendisliği
                        2.Sınıf Öğrencisiyim. Bilgisayarlara Yazılıma Teknolojiye ve Oyunlara ilgiliyim. Amacım Tecrübelerimi
                        günlük hayatta karşılaşabileceğim sorunlara karşı çözümler üretirken kullanmak ve bu yolda kendimi
                        hep geliştirmek istiyorum.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
