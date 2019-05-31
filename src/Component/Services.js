import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktales Gratis",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaHiking />,
        title: "Actividades al aire libre",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Autos personales",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaBeer />,
        title: "Salas de cerveza",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
