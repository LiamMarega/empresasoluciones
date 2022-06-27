import React from 'react';
import './Presentacion.css';
import { Container, Image } from 'react-bootstrap';
import img3D from '../../Images/fondoProgramacion.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function Presentacion() {
  return (
    <Container fluid style={{padding: "0"}}>
      <div className='Presentacion_Container' id='app'>
        <div className='title'>
          <div className='title-inner'>
            <div className='cafe'>
              <div className='cafe-inner'>Developer</div>
            </div>
            <div className='mozart'>
              <div className='mozart-inner'>Full Stack</div>
            </div>
          </div>
        </div>

        <div className='image'>
          <Image src={img3D} alt='Imagen' fluid />
        </div>
      </div>
    </Container>
  );
}

export default Presentacion;
