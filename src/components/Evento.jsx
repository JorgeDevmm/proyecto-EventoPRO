import PropTypes from 'prop-types';

const Evento = ({ evento, setEvento }) => {
  const { nombre, contacto, email, fecha, detalle } = evento;

  return (
    <>
      <div className='m-3 bg-[#030303] px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre: {''}
          <span className='text-white font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre de Contacto: {''}
          <span className='text-white font-normal normal-case'>{contacto}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Email: {''}
          <span className='text-white font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Fecha de Evento: {''}
          <span className='text-white font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Detalle de Evento: {''}
          <span className='text-white font-normal normal-case'>{detalle}</span>
        </p>

        <div className='flex flex-row gap-4 justify-between mt-10'>
          <div>
            <button
              type='button'
              className='py-2 px-10 bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase rounded-lg'
              // al pasar un argumento aplicamos un callback con fn flecha
              onClick={()=>setEvento(evento) }
            >
              Editar
            </button>
          </div>
          <div>
            <button
              type='button'
              className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// documentación prop
Evento.propTypes = {
  evento: PropTypes.object.isRequired,
  setEvento: PropTypes.func.isRequired,
};

export default Evento;
