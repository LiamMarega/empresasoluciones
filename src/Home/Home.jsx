import React, { useState } from 'react';
import Habilidades from '../Components/Habilidades/Habilidades.jsx';

import Presentacion from '../Components/Presentacion/Presentacion.jsx';
import Habilidades2 from '../Components/Habilidades2/Habilidades2.jsx';
import Personaje from '../Components/Personaje/Personaje.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function Home() {
  return (
    <div>
      <Presentacion />
      <Habilidades />
      <Habilidades2 />
      <Personaje />
      <Footer />
    </div>
  );
}

export default Home;
