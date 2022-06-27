import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Personaje.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageDiseño from '../../Images/24.png';
import ImageDesarrollo from '../../Images/16.png';
import ImageMarketing from '../../Images/25.png';
import Proyectos from '../Proyectos/Proyectos';
import Valores from '../Valores/Valores';

function Personaje() {
  const [select, setSelect] = useState({
    desarrollo: true,
    diseño: false,
    marketing: false
  });
  
  const handleChange = (data) => {
    console.log(data);
    if (data == 'desarrollo') {
      return setSelect({
        ...select,
        desarrollo: true,
        diseño: false,
        marketing: false
      });
    }
    if (data == 'diseño') {
      return setSelect({
        ...select,
        desarrollo: false,
        diseño: true,
        marketing: false
      });
    }
    if (data == 'marketing') {
      return setSelect({
        ...select,
        desarrollo: false,
        diseño: false,
        marketing: true
      });
    }
  };

  return (
    <Container fluid className='Personaje'>
      <Container className='Personaje_Container'>
        <Row className='Personaje_Container_Row'>
          <Col sm={12} md={4}>
            <Card sx={{ minWidth: 275, marginBottom: '20px' }} style={select?.desarrollo ? { backgroundColor: '#223244', cursor: 'pointer', color: 'white' } : { cursor: 'pointer' }} onClick={() => handleChange('desarrollo')}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Desarrollo
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Profesional, Eficiente, Seguro
                </Typography>
                <Typography variant='body2'>
                  Creo páginas web con diseños personalizados, de rápida carga, adaptables a dispositivos móviles y, enfocadas.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, marginBottom: '20px' }} style={select?.diseño ? { backgroundColor: '#223244', cursor: 'pointer', color: 'white' } : { cursor: 'pointer' }} onClick={() => handleChange('diseño')}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Diseño
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Diseño Grafico, Web, Mobile, UX/UI
                </Typography>
                <Typography variant='body2'>
                  Creo marcas desde cero, diseño logos, artes publicitarios, ilustraciones personalizadas y mucho más…
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, marginBottom: '20px' }} style={select?.marketing ? { backgroundColor: '#223244', cursor: 'pointer', color: 'white' } : { cursor: 'pointer' }} onClick={() => handleChange('marketing')}>
              <CardContent>
                <Typography variant='h5' component='div'>
                  Marketing
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Planificación, Gestión y Organización
                </Typography>
                <Typography variant='body2'>
                  ¿Buscas ayuda para manejar tus redes sociales? <br />
                  Entonces encontraste a la Persona indicada para el trabajo. Conoce más sobre nuestros paquetes de social media para el Marketing Digital .
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Col>

          <Col sm={12} md={8}>
            {select.desarrollo ? (
              <Image className='imgState Desarrollo' style={{ marginTop: '-10%' }} width={'100%'} src={ImageDesarrollo} />
            ) : select.diseño ? (
              <Image className='imgState Diseño' style={{ marginTop: '-10%' }} width={'100%'} src={ImageDiseño} />
            ) : select.marketing ? (
              <Image className='imgState Marketing' style={{ marginTop: '-10%' }} width={'100%'} src={ImageMarketing} />
            ) : (
              <Image className='imgState Desarrollo' style={{ marginTop: '-10%' }} width={'100%'} src={ImageDesarrollo} />
            )}
          </Col>
        </Row>
      </Container>
	  <Valores />
	  <Proyectos />
    </Container>
  );
}

export default Personaje;
