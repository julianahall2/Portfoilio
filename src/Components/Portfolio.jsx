/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fotominha.jpeg";

const imageAltText = "Foto minha";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Projeto Bot Azure",
    description:
      "Projeto de um bot para atendimento ao cliente, onde o bot é capaz de mostrar opcoes de produtos, pagamento e finalizar a compra.",
    url: "https://github.com/julianahall2/cloud.git",
  },
  {
    title: "Startup Barber.go",
    description:
      "Aplicativo de atendimento de barbearia premium na conveniência da casa do cliente, no horário que ele preferir,lexibilidade de agendamento, com atendimento de qualidade, com profissionais qualificados e produtos de alta qualidade",
    url: "https://github.com/julianahall2/baber-go.git",
  },
  {
    title: "Projeto Big Data",
    description:
      "Projeto no Azure onde foi criado foi criado um cliente e enderecos desses clientes, com a possibilidade de adicionar, editar e deletar clientes e enderecos.",
    url: "https://github.com/julianahall2/big_data.git",
  },
  {
    title: "Projeto Chamados ",
    description:
      "Nossa missão era desenvolver um sistema de chamados para a Microméros, empresa de tecnologia que oferece serviços às industrias, para aumento da produtividade e organização dos atendimentos solicitados, através de um controle eficiente de chamados com segmentação por departamento e criticidade. Esse sistema deve permitir se possa organizar os chamados internos de seus usuários e registrar os tickets com suas informações durante e após o atendimento.",
    url: "https://github.com/rafaelf-lima/projeto-front-end.git",
  },
  {
    title: "Jogo Escape",
    description:
      " Escape foi um jogo de plataforma em 2D criado no Godot, onde o jogador controla um personagem que deve percorrer vários níveis, saltando entre plataformas, evitando obstáculos e inimigos, coletando itens espalhados pelo caminho. O objetivo final é chegar ao final de cada nível, onde o jogador poderá avançar para o próximo estágio.",
    url: "https://github.com/larissanobregaa/Jogo-Escape.git",
  },
  {
    title: "Site Botafogo",
    description:
      " Site do Botafogo de Futebol e Regatas, com informações sobre o time e jogadores.",
    url: "https://julianahall2.github.io/Trab_AP2/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
