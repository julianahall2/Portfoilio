/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        background: "rgba(255,255,255,0.95)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">Sobre Mim</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contato</a>
      <a href="#curriculo">Currículo</a>
    </div>
  );
};

export default Header;
