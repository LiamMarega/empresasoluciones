import React from "react";
import { Link } from "react-scroll";
import "./Presentacion.css";
import { Container, Image } from "react-bootstrap";
import img3D from "../../Images/fondoProgramacion.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosArrowDropdownCircle } from "react-icons/Io";
function Presentacion() {
  return (
    <Container fluid style={{ padding: "0" }}>
      <div className="Presentacion_Container" id="app">
        <div className="title">
          <div className="title-inner">
            <div className="cafe">
              <div className="cafe-inner">Empresa</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">Soluciones</div>
            </div>
          </div>
        </div>

        <div className="image">
          <Image src={img3D} alt="Imagen" fluid />
        </div>
        <div className="containerArrow">
          <Link
            activeClass="active"
            to="containerHabilidades2"
            smooth={true}
            hashSpy={true}
            offset={-350}
            duration={500}
            isDynamic={true}
          >
            <IoIosArrowDropdownCircle id="arrow" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Presentacion;
