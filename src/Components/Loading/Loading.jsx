import React, { useEffect, useState } from 'react';
import './Loading.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Link } from "react-scroll"; */
import { useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';

function Loading() {
  const [loading, setLoading] = useState(true);

  const navigateTo = useNavigate();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setTimeout(function () {
        navigateTo('/home');
      }, 12000);
    }
    return () => {
      isMounted = false;
    };
  });

  return (
    <Container className={loading ? 'Loading true' : 'Loading false'} fluid>
      <div className='landing__nombre'>
        <div className='containerLoading'>
          <h1>Hola, yo soy</h1>
          <h1>Liam.</h1>
        </div>
      </div>
  
    </Container>
  );
}

export default Loading;
