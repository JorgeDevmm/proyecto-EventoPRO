import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';
import Footer from './components/Footer';

function App() {
  // hooks
  // Este código inicializa el estado eventos como un array vacío mediante el uso de useState
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState({});

  // Este efecto se ejecuta solo una vez, cuando el componente se monta ([] como dependencia significa que no depende de ninguna variable y, por lo tanto, se ejecuta solo una vez al inicio).
  useEffect(() => {
    // función que parsea a un array el evento de localStorage o agrega un array vacio si es null o undefined
    const obtenerLS = () => {
      const eventosLS = JSON.parse(localStorage.getItem('eventos')) ?? [];
      // actualiza el estado del arreglo con el valor obtenido de localStorage
      setEventos(eventosLS);
    };

    obtenerLS();
  }, []);

  // cuando ocurre un cambio en el arreglo de eventos
  useEffect(() => {
    // guardamos en localStorage y lo convertimos en un string con JSON.s
    localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]);

  // función eliminar Eventos
  const eliminarEvento = (id) => {
    const eventosActualizados = eventos.filter((evento) => evento.id !== id);

    // actualiza el arreglo de eventos con los eventos diferentes al id
    setEventos(eventosActualizados);
  };

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
          eliminarEvento={eliminarEvento}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
