import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Skills.css";

const skills = [
    { name: "JavaScript", icon: "/skills/jsresim.png" },
    { name: "React", icon: "/skills/ReactPng.png" },
    { name: "Python", icon: "/skills/pythonresim.png" },
    { name: "CSS", icon: "/skills/css-logo.png" },
    { name: "C#", icon: "/skills/Csharp_Logo.png" },
    { name: "HTML5", icon: "/skills/HTML5.png" },
];

const titleVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const skillVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
};

const skillHover = {
    translateY: -5,
    boxShadow: "0 10px 20px rgba(88, 166, 255, 0.6)",
    transition: { duration: 0.15, ease: "easeOut" },
};

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(null);
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start("visible");
                    setHasAnimated(true);
                }

                 else if (!entry.isIntersecting && hasAnimated) {
                     controls.start("hidden");
                     setHasAnimated(false);
                 }
            },
            { threshold: 0.2 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [controls, hasAnimated]);

    return (
        <section className="skills-section" id="skills" ref={sectionRef}>
            <motion.h2
                className="skills-title"
                variants={titleVariants}
                initial="hidden"
                animate={controls}
            >
                Neler Yapabilirim ?
            </motion.h2>

            <div className="skills-list">
                {skills.map(({ name, icon }, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <motion.div
                            key={index}
                            className="skill-item"
                            custom={index}
                            variants={skillVariants}
                            initial="hidden"
                            animate={controls}
                            whileHover={skillHover}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                cursor: "pointer",
                                boxShadow: isActive
                                    ? "0 0 15px 5px rgba(88, 166, 255, 0.8)"
                                    : "0 0 8px rgba(255, 244, 0, 0.87)",
                                scale: isActive ? 1.1 : 1,
                            }}
                        >
                            <img src={icon} alt={`${name} icon`} className="skill-icon" />
                            <span className="skill-name">{name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
