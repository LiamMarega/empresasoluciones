import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Stack from '@mui/material/Stack';
import Logo from '../../Images/LogoEmpresa.png';
function Footer() {
  return (
    <Container fluid className='Footer'>
      <Container className='Footer_Container' style={{ color: 'white' }}>
        <Row className='Footer_Row'>
          <Col xs={4} className='ContainerLogo'>
            {' '}
            <Stack direction='row' spacing={2}>
              <Image fluid src={Logo} />
              <h3 style={{ marginTop: '7%' }}>Desarrollo, Diseño, Marketing.</h3>
            </Stack>{' '}
          </Col>
          <Col xs={4} className='ContainerLogo'></Col>
          <Col xs={4} className='ContainerLogo'>
            {' '}
            <Stack  spacing={2}>
              <h3 style={{ marginTop: '7%' }}>Contactos</h3>
		 	<a href='https://www.linkedin.com/in/liam-marega/' target='_blank' > <FiLinkedin /> Linkedin</a>
		  <a href='https://github.com/LiamMarega' target='_blank'> <FiGithub /> Github</a>
			<a href='https://www.instagram.com/empresasoluciones/' target='_blank' >  <FiInstagram /> Instagram</a>
			<a href='mailto:liammarega85@gmail.com' target='_blank' >  <FiMail /> Mail</a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
