import PropTypes from 'prop-types';
import { useState } from 'react';

const Evento = ({ evento, setEvento, eliminarEvento }) => {
  const { nombre, contacto, telefono, email, fecha, detalle, id } = evento;

  const [modalVisible, setModalVisible] = useState(false);

  // función eliminar que activara el modal
  const handleEliminar = () => {
    setModalVisible(true);
  };

  // confirmación de eliminación
  const confirmarEliminar = () => {
    // eliminar el id del evento de parametro
    eliminarEvento(id);
    setModalVisible(false);
  };

  // cancelación de eliminación
  const cancelarEliminar = () => {
    setModalVisible(false);
  };


  return (
    <>
      <div className='m-3 bg-[#030303] px-5 py-10 rounded-xl'>
        {/* genero modal de confirmación */}
        {modalVisible ? (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-[#191919] p-8 rounded shadow-md max-w-md'>
              <p className='text-lg font-semibold mb-4'>¿Estás seguro?</p>
              <p className='text-white mb-6'>
                Esta acción no se puede deshacer.
              </p>
              <div className='flex justify-end'>
                <button
                  className='bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600 font-bold'
                  onClick={confirmarEliminar}
                >
                  Confirmar
                </button>
                <button
                  className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 font-bold'
                  onClick={cancelarEliminar}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre de Evento: {''}
          <span className='text-white font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Contacto: {''}
          <span className='text-white font-normal normal-case'>{contacto}</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Telefono: {''}
          <span className='text-white font-normal normal-case'>{telefono}</span>
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
              onClick={() => setEvento(evento)}
            >
              Editar
            </button>
          </div>
          <div>
            <button
              type='button'
              className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
              // pasamos el id como argumento a eliminar
              onClick={handleEliminar}
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
  eliminarEvento: PropTypes.func.isRequired,
};

export default Evento;
