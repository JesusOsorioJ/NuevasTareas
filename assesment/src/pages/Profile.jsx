import React from 'react';
import Header from '../components/header/Header';

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="head">
          <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/808.jpg" alt="" />
          <div>
            <h2>JESUS DAVID OSORIO JIMENEZ</h2>
            <div className="head1">
              <h2>Correo:</h2>
              <h2>jesdaos@hotmail.com</h2>
            </div>
            <div className="head1">
              <h2>Git Hub:</h2>
              <a href="https://github.com/JesusOsorioJ/"><h2>https://github.com/JesusOsorioJ/</h2></a>
            </div>
          </div>
        </div>
        <div className="body">
          <h2>Lista de 3 cosas que hayas aprendido en este programa</h2>
          <p className="parrafo">
            1. Habilidades para el desarrollo de aplicacion web, adquiriendo conocimientos
            sobre múltiples lenguajes de programación, maneja bases de datos y habilidades
            de diseño
          </p>
          <p className="parrafo">
            2. El trabajo en equipo como herramienta fundamental para la desarrollo de
            proyectos , con la asignacion de recursos y buena gestion de los tiempos de ejecucion
          </p>
          <p className="parrafo">
            3. El desarrollo de habilidades blandas promueve un desarrollo eficiente de las
            relaciones interlaborales y mejorar la productividad del proyecto
          </p>
        </div>
      </div>
    </>
  );
}
