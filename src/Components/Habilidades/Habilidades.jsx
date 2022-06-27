import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Habilidades.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Habilidades() {
  return (

    <Container fluid className='Habilidades_Container'>
      <Container className='Habilidades_ContainerHijo'>

        <Row>
          <Col sm={12} xl={12}>
            <h2>Sobre Mí</h2>
          </Col>
          <Col sm={12} xl={12}>

            <p className='Habilidades_Descripcion_SobreMi'> ¡Hola! 👋 Soy Liam Marega Full Stack Developer <hr /> Manejo todo el Stack Mern de JavaScript, Soy desarrollador totalmente enfocado en mi trabajo, eficiente y profesional. <br /> Me adapto con facilidad a entornos nuevos y al uso de nuevas tecnologías. <br />  😊</p>
          </Col>
        </Row>
        <Row className='Container_Row_Especificaiones'>
          <Col className='Container_Col_Especificaiones' sm={6} md={6} xl={6}>
            <div className='rainbow'>
              <div className='especificaciones'>
                <h3>Especificaciones</h3>
                <hr />
                <ul>
                  <li>Diseño web y gráfico</li>
                  <li>Investigación en experiencia del usuario</li>
                  <li>Manejo de lenguajes de programación </li>
                  <li>Marketing Digital </li>
                  <li>Diseño UX/UI</li>
                </ul>
                <br />
                <p>

                  <b>Javascript - Git React.js - Redux - HTML - CSS - NodeJs - Express - Postman - PostgreSQL - Sequelize - Webpack - Babel</b>
                </p>
                <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' alt='javascript' width='40' height='40' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png' alt='React' width='45' height='40' />
                <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' alt='html5' width='45' height='40' />
                <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' alt='css3' width='45' height='40' />
                <img src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='NodeJs' width='40' height='40' />
                <img src='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg' alt='html5' width='95' height='45' />
                <img src='https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' alt='postgresql' width='40' height='40' />
                <img src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' alt='git' width='40' height='40' />
                <img src='https://camo.githubusercontent.com/c795856c6306f78db65e0b2da98e216731ab0669e911c6fb05260bd546c70f41/68747470733a2f2f64333377756272666b69306c36382e636c6f756466726f6e742e6e65742f376131393763666534343534386363316133663538313135326166373061333035316531313637312f37386466382f696d672f626162656c2e737667' alt='babel' width='40' height='40' />
                <img src='https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667' alt='postman' width='40' height='40' />
                <img src='https://camo.githubusercontent.com/7e98cb6db3805ca16447adf245fd9b7d82372f4e7b4d7b8a71e9fbeba4a15d7f/68747470733a2f2f7374617469632d30302e69636f6e6475636b2e636f6d2f6173736574732e30302f66696c652d747970652d73657175656c697a652d69636f6e2d343433783531322d636b307a38316a332e706e67' alt='git' width='40' height='40' />

                <img />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Habilidades;
