import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';
import Footer from './components/Footer';

function App() {
  const [eventos, setEventos] = useState([]);

  return (
    <div className='bg-[#030303] h-full'>
      <Header />
      <div className=' md:flex container mx-auto '>
        <Formulario
          //props
          eventos={eventos}
          setEventos={setEventos}
        />
        <ListadoEventos
          eventos={eventos}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
