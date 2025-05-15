import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1 className="greeting">Merhaba, ben <span className="highlight">Metehan Ülker</span></h1>
                <h2 className="title animate-fade"></h2>
                <p className="description animate-slide">
                    Bu sektörde Yaklaşık 2 yıldır Deneyim kazanan birisiyim.
                </p>
                <a href="#contact" className="cta-button">İletişime Geç</a>
            </div>
        </section>
    );
};

export default Home;
