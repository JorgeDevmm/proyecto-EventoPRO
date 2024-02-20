import PropTypes from 'prop-types';
import Evento from './Evento';

const ListadoEventos = ({ eventos }) => {
  return (
    <div className='md:w-2/4 bg-gradient-to-r from-[#393A3A] to-[#030303]  text-white  md:h-screen  overflow-y-scroll'>
      <h2 className='text-center font-bold text-xl lg:text-3xl  pt-8'>
        Listado de Eventos
      </h2>
      <p className='text-center text-lg mt-2 text-white mb-10'>
        Administra tus {''}
        <span className='text-rose-600 font-bold'>Eventos y reuniones</span>
      </p>

      {/* iteramos el arreglo eventos y obtenemos el objeto evento*/}
      {eventos.map( evento => (
        <Evento
          key={evento.id}
          evento={evento}
        />
      ))}
    </div>
  );
};

// documentación prop
ListadoEventos.propTypes = {
  eventos: PropTypes.array.isRequired,
};

export default ListadoEventos;
