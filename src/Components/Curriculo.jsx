/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";
const imageCurriculo = require("../images/Curriculo.png");

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Segue o meu curriculo, onde voce pode encontrar mais informacoes sobre a minha formacao academica, experiencia profissional e projetos que participei.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const Curriculo = () => {
  return (
    <section className="padding" id="curriculo">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Curriculo</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
        <li>
            <a href={imageCurriculo} target="_blank" rel="noreferrer">
            <img src={imageCurriculo} alt="Curriculo" style={{ width: "100%" }} />
            </a>
            </li>
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>Atualizado desde 2025</p>
      </div>
    </section>
  );
};

export default Curriculo;
