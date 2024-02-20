import PropTypes from 'prop-types';
import Error from './Error';

import { useState } from 'react';

const Formulario = ({ eventos, setEventos }) => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [detalle, setDetalle] = useState('');

  const [error, setError] = useState(false);

  // Función que genera ID
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, contacto, email, fecha, detalle].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      contacto,
      email,
      fecha,
      detalle,
      id: generarId() /*id autogenerado por función */,
    };

    // aplicamos spred operation, para tomar una copia de eventos e ir agregando
    setEventos([...eventos, objetoPaciente]);

    // reiniciando el formulario
    setNombre('');
    setContacto('');
    setEmail('');
    setFecha('');
    setDetalle('');
  };

  return (
    <div className='bg-[#030303] md:w-1/2 lg:w-2/4 rounded-l-lg '>
      <h2 className='text-center pt-8 text-xl lg:text-3xl font-bold text-white'>
        Ingresar Información del Evento
      </h2>
      <p className='text-center text-lg mt-2 text-white mb-10'>
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
        <div className='mb-5'>
          <label htmlFor='nombre' className='font-bold block text-stone-300'>
            Nombre de Evento
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

        <div className='mb-5'>
          <label htmlFor='contacto' className='font-bold block text-stone-300'>
            Nombre de Contacto
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
        <div className='mb-5'>
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
        <div className='mb-5'>
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
        <div className='mb-5'>
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
          value='Registrar'
        />
      </form>
    </div>
  );
};

// documentación prop
Formulario.propTypes = {
  eventos: PropTypes.array.isRequired,
  setEventos: PropTypes.func.isRequired,
};

export default Formulario;
