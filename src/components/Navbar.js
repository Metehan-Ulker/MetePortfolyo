import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="navbar">
            <ul className="navbar-menu">
                <li onClick={() => handleClick("home")}>Anasayfa</li>
                <li onClick={() => handleClick("about")}>Ben Kimim</li>
                <li onClick={() => handleClick("skills")}>Neler Yapabilirim</li>
                <li onClick={() => handleClick("portfolio")}>Portfolyo</li>
                <li onClick={() => handleClick("contact")}>İletişim</li>
                <li onClick={() => handleClick("social")}>Sosyal Medya</li>
            </ul>
        </header>
    );
};

export default Navbar;
