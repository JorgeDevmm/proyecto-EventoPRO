import PropTypes from 'prop-types';
import Error from './Error';

import { useState, useEffect } from 'react';

const Formulario = ({ eventos, setEventos, evento, setEvento }) => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [detalle, setDetalle] = useState('');

  const [error, setError] = useState(false);

  // aplicando useEffect/efectos secundariao acciones en manipulación DOM
  useEffect(() => {
    // solo se ejecutara cuando cambie
    // valida objeto evento que no este vacio
    if (Object.keys(evento).length > 0) {
      setNombre(evento.nombre);
      setContacto(evento.contacto);
      setTelefono(evento.telefono);
      setEmail(evento.email);
      setFecha(evento.fecha);
      setDetalle(evento.detalle);
    }
  }, [evento]);

  // Función que genera ID
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  // useState modal actualización
  const [modalActualizacion, setModalActualizacion] = useState(false);

  // función de actualización
  const handleActualizacion = () => {
    setEvento(evento);
    setModalActualizacion(true);
  };

  // cancelación de actualización
  const cerrarActualizacion = () => {
    setModalActualizacion(false);
  };

  // validación de campos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, contacto, telefono, email, fecha, detalle].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Evento
    const objetoEvento = {
      nombre,
      contacto,
      telefono,
      email,
      fecha,
      detalle,
    };

    // validamos si existe el id del evento, evento.id es del argumento props que recibimos
    if (evento.id) {
      // Editando el Registro

      // asignar id de evento al objetoEvento a editar
      objetoEvento.id = evento.id;

      // Iteramos sobre el array de eventos y comparamos el id de evento is es igual eventoState y no devolver el objeto actualizo o no en el state
      const eventosActualizados = eventos.map((eventoState) =>
        eventoState.id === evento.id ? objetoEvento : eventoState
      );

      setEventos(eventosActualizados);
      handleActualizacion();/*modal de actualización informativo */
      // limpiar el state en memoria
      setEvento({});
    } else {
      // Nuevo Registro

      (objetoEvento.id =
        generarId()) /*id autogenerado por función, generando en l objetoEvento */,
        // aplicamos spred operation, para tomar una copia de eventos e ir agregando
        setEventos([...eventos, objetoEvento]);
    }

    // reiniciando el formulario
    setNombre('');
    setContacto('');
    setTelefono('');
    setEmail('');
    setFecha('');
    setDetalle('');
  };

  return (
    <div className='bg-[#030303] md:w-1/2 lg:w-2/4 rounded-l-lg '>
      {/* genero modal de actualización */}
      {modalActualizacion ? (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center '>
          <div className='bg-[#191919] p-8 rounded shadow-md max-w-md flex flex-col items-center justify-center w-72'>
            {/* <p className='text-lg font-semibold mb-4'>Se actualizo</p> */}
            <svg
              className='w-24 h-24 text-[#6CBC43] dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z'
                clip-rule='evenodd'
              />
            </svg>

            <p className='text-white font-bold mb-6'>Se Actualizo el Evento</p>
            <div className='flex justify-end'>
              <button
                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-gray-400 font-bold'
                onClick={cerrarActualizacion}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <h2 className='text-center pt-2 text-xl lg:text-3xl font-bold text-white'>
        Ingresar Información del Evento
      </h2>
      <p className='text-center text-lg mt-2 text-white mb-2'>
        Añade Eventos y {''}
        <span className='text-rose-600 font-bold '>Admistrarlos</span>
      </p>

      <form
        onSubmit={handleSubmit} /*asociar función a evento*/
        action=''
        className=' text-white shadow-md py-5 px-5 md:w-4/5 lg:w-11/12 mx-auto rounded-xl'
      >
        {/* validando error y aplicando props tipo children */}
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className='mb-3'>
          <label htmlFor='nombre' className='font-bold block text-stone-300'>
            Nombre del Evento
          </label>
          <input
            type='text'
            id='nombre'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Nombre de Evento'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='contacto' className='font-bold block text-stone-300'>
            Nombre del Contacto
          </label>
          <input
            type='text'
            id='contacto'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Nombre del Contacto'
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='telefono' className='font-bold block text-stone-300'>
            Telefono
          </label>
          <input
            type='text'
            id='telefono'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Ingresar Telefono'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='font-bold block text-stone-300'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='email de contacto'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='fecha' className='font-bold block text-stone-300'>
            Fecha de evento
          </label>
          <input
            type='date'
            id='fecha'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='detalle' className='font-bold block text-stone-300'>
            Detalle de evento
          </label>
          <textarea
            name=''
            id='detalle'
            cols='30'
            rows='3'
            className='border-2 p-2 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Detalles del Evento'
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
          ></textarea>
        </div>

        <input
          type='submit'
          className='py-3 bg-[#2D44F5] text-white font-bold text-lg rounded-lg inline-block  w-full hover:bg-[#2c76ffef] transition-colors'
          // valida el value de que mostrar de acuerdo si existe el id
          value={evento.id ? 'Editar Evento' : 'Agregar Evento'}
        />
      </form>
    </div>
  );
};

// documentación prop
Formulario.propTypes = {
  eventos: PropTypes.array.isRequired,
  setEventos: PropTypes.func.isRequired,
  evento: PropTypes.object.isRequired,
  setEvento: PropTypes.func.isRequired,
};

export default Formulario;
