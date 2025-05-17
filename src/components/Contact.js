import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mesajınız gönderildi! Teşekkürler.");
        setFormData({ name: "", email: "", message: "" });
    };

    // Başlık varyantı
    const headerVariants = {
        initial: { x: "-100%", opacity: 0, scale: 0.8, color: "#222" },
        animate: {
            x: "0%",
            opacity: 1,
            scale: 1.1,
            color: "#007bff",
            transition: {
                duration: 1,
                ease: "easeOut",
                yoyo: Infinity,
                repeatDelay: 2,
            },
        },
    };

    // Form alanları varyantı
    const formVariants = {
        initial: { opacity: 0, y: 50, scale: 0.9 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.7 }}
                    variants={headerVariants}
                    style={{
                        fontWeight: "900",
                        fontSize: "3.5rem",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        marginBottom: "2rem",

                    }}
                >
                    İLETİŞİM
                </motion.h2>

                <motion.form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={formVariants}
                >
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Adınız Soyadınız"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">İçerik</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Mesajınız..."
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="btn-submit">
                        Gönder
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
