import React from 'react';
import './Plantillas.css';
import fotoClima from '../../Images/1.png';
import fotoPomodoro from '../../Images/2.png';
import fotoRocket from '../../Images/3.png';
import fotoPerro from '../../Images/4.png';
import fotoTarp from '../../Images/5.png';
import fotoMovie from '../../Images/6.png';
import fotoReposteria from '../../Images/imgTorta.png';
import fotoBar from '../../Images/imgBar.png';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import MUI */
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
/* import boostrap */
import { Col, Container, Image, Row } from 'react-bootstrap';

function Plantillas() {
  function onClick(e) {
    alert('Proyecto aun no Deployado :(');
  }

  const itemData = [
    {
      img: fotoClima,
      title: 'Wheater App',
      description: 'Aplicacion para obtener el clima de una ciudad',
      link: 'https://wheaterapp-liammarega.netlify.app'
    },
    {
      img: fotoRocket,
      title: 'Rocket Project',
      description: 'Aplicacion para obtener Videollamadas privadas y organizadas para instituciones',
      link: 'https://rocketprojectarg.netlify.app'
    },
    {
      img: fotoPerro,
      title: 'Dog App',
      description: 'Aplicacion obtener y crear distintas razas de perros',
      link: 'https://dogapp-liammarega.vercel.app'
    },
    {
      img: fotoPomodoro,
      title: 'Pomodoro',
      description: 'Reloj de pomodoro para trabajar o estudiar',
      link: 'https://pomodoroclock-liammarega.netlify.app'
    },
    {
      img: fotoTarp,
      title: 'TARP Reader',
      description: 'Aplicacion escaner de posibles scams en contratos de la blockchain',
      link: ''
    },

    {
      img: fotoMovie,
      title: 'Movie App',
      description: 'Aplicaion para obtener informacion real y actualizada de peliculas, series o programas de TV',
      link: ''
    },

    {
      img: fotoReposteria,
      title: 'Template',
      description: 'Template de reposteria',
      link: 'https://template-reposteria.vercel.app'
    },
    {
      img: fotoBar,
      title: 'Template de Bar',
      description: 'Template de bar',
      link: 'https://templaterestobar.vercel.app'
    }
  ];

  return (
    <Container fluid className='Plantillas_Container'>
      <Container className='Plantillas_Container_Data1'>
        <div class='container Plantilla_ContainerText'>
          <div class='row'>
            <div class='col-md-12 text-center'>
              <h3 class='animate-charcter'> PLANTILLAS PARA TÍ</h3>
            </div>
          </div>
        </div>
        <Row>
          {itemData.map((item, idx) => (
            <Col xs={5} md={3} key={idx} style={{ paddingBottom: '20px' }}>
              <a href={item.link} target='_blank'>
                <Image style={{ borderRadius: '10%' }} fluid src={item.img} alt={item.title} loading='lazy' />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Plantillas;
