import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Menü kapansın
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            {/* Logo veya başlık */}
            <div className="navbar-logo"></div>

            {/* Hamburger icon */}
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            {/* Menü */}
            <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
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
