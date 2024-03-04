import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';
import Footer from './components/Footer';

function App() {
  // hooks
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState([]);

  return (
    <div className='bg-[#030303] h-full'>
      <Header />
      <div className=' md:flex container mx-auto '>
        <Formulario
          //props
          eventos={eventos}
          setEventos={setEventos}
          evento={evento} /*para cargar al form para la edición */
          setEvento={setEvento} /*Modificar evento en memoria en formulario */
        />
        <ListadoEventos
          // props
          eventos={eventos} /*manipular el objetos de todos los eventos */
          setEvento={setEvento} /*actualizar o edita un evento en particular */
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
