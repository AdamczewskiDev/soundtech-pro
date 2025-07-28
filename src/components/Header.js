import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h1>SoundTech Pro</h1>
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
          <a href="#about" onClick={() => scrollToSection("about")}>
            O nas
          </a>
          <a href="#services" onClick={() => scrollToSection("services")}>
            Usługi
          </a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Kontakt
          </a>
        </nav>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
