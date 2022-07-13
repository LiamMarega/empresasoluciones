import React, { useState } from "react";
import "./Proyectos.css";
import fotoClima from "../../Images/1.png";
import fotoPomodoro from "../../Images/2.png";
import fotoRocket from "../../Images/3.png";
import fotoPerro from "../../Images/4.png";
import fotoTarp from "../../Images/5.png";
import fotoMovie from "../../Images/6.png";
import fotoBurger from "../../Images/7.png";
import fotoFmoney from "../../Images/8.png";
import fotoReposteria from "../../Images/imgTorta.png";
import fotoBar from "../../Images/imgBar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalProyectos from "./Modal/ModalProyects";
/* import MUI */
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
/* import boostrap */
import { Col, Container, Image, Row, Button } from "react-bootstrap";

function Proyectos() {
  function onClick(e) {
    alert("Proyecto aun no Deployado :(");
  }

  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  const itemData = [
    {
      img: fotoReposteria,
      title: "Template",
      description:
        "Plantilla de reposteria para mostrar mejores productos y informacion relevante sobre su negocio!",
      link: "https://template-reposteria.vercel.app"
    },
    {
      img: fotoBar,
      title: "Template de Bar",
      description:
        "Plantilla de bar, adaptable a su negocio para mostrar informacion relevante para el publico!",
      link: "https://templaterestobar.vercel.app"
    },
    {
      img: fotoBurger,
      title: "Template Burger",
      description:
        "Plantilla Premium para restaurantes o negocios, totalmente adaptable a cualquier modelo para mostrar sus productos estrellas!",
      link: "https://template-burger.netlify.app"
    },
    {
      img: fotoRocket,
      title: "Rocket Project",
      description:
        "Aplicacion para obtener Videollamadas privadas y organizadas para instituciones Desarrollo de una aplicación web funcional para la organización de centros educativos y los alumnos que lo integran. Es capaz de crear grupos de estudio en una institución, separarlos en mesas de trabajo inteligentemente y ofrecerles un chat y link para una reunión.",
      link: "https://rocketprojectarg.netlify.app"
    }
  ];

  const handleClick = (data) => {
    setModalShow(true);
    setModalInfo(data);
  };

  return (
    <Container fluid className="Proyectos_Container">
      <ModalProyectos
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={modalInfo}
      />
      ;
      <div class="container Plantilla_ContainerText">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> ¡Mas proyectos nuestros!</h3>
          </div>
        </div>
      </div>
      <Container className="Proyectos_Container_Data1">
        <Row>
          {itemData.map((data, idx) => (
            <Col
              xs={5}
              md={3}
              key={idx}
              style={{ paddingBottom: "20px" }}
              onClick={() => handleClick(data)}
            >
              <Image
                style={{ borderRadius: "10%" }}
                fluid
                src={data.img}
                alt={data.title}
                loading="lazy"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Proyectos;
