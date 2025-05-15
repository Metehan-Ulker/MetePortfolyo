import { useState } from "react";
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

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container fade-up">
                <h2>İletişim</h2>
                <form onSubmit={handleSubmit} className="contact-form">
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
                </form>
            </div>
        </section>
    );
}
