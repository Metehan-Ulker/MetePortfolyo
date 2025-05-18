import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
    {
        id: 1,
        title: "Yemek Sipariş Uygulaması",
        description: "Python ve SQLite veri tabanı kullanarak tasarladığım yemek sipariş uygulaması.",
        imageUrl: "/yemeksipariş.jpg",
        link: "https://github.com/Metehan-Ulker/YemekSiparisUygulamasi"
    },
    {
        id: 2,
        title: "Word Tasarım Uygulaması",
        description: "Python ve QtDesigner kullanarak Word benzeri uygulama tasarladım.",
        imageUrl: "/foto3.jpg",
        link: "https://github.com/Metehan-Ulker/WordUygulamasi"
    },
    {
        id: 3,
        title: "Soru Bankası",
        description: "Python ve QtDesigner kullanarak soru bankası uygulaması tasarladım.",
        imageUrl: "/foto2.jpg",
        link: "https://github.com/Metehan-Ulker/SoruBankasi"
    },
    {
        id: 4,
        title: "Arduino ile Tarım Robotu",
        description: "Arduino ve Motor sürücüler kullanarak grup halinde tasarladığımız Tarım Robotu.",
        imageUrl: "/araç.jpeg",
        link: "https://github.com/Metehan-Ulker/ArduinoTarimRobotu"
    },
];

const variants = {
    0: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 }
    },
    1: {
        initial: { opacity: 0, rotate: -10, scale: 0.9 },
        animate: { opacity: 1, rotate: 0, scale: 1 }
    },
    2: {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 }
    },
};

export default function Portfolio() {
    return (
        <section className="portfolio-section" id="portfolio">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                Portfolyo
            </motion.h2>

            <div className="portfolio-grid">
                {projects.map(({ id, title, description, imageUrl, link }, index) => {
                    const variant = variants[index % 3];
                    return (
                        <motion.div
                            key={id}
                            className="portfolio-card"
                            initial={variant.initial}
                            whileInView={variant.animate}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.25 }}
                        >
                            <img src={imageUrl} alt={title} />
                            <div className="portfolio-info">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-portfolio"
                                >
                                    Projeye Git
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
