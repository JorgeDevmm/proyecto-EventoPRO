import { useState, useEffect } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Esto es una prueba de envio de formulario');
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
        <div className='mb-5'>
          <label htmlFor='nombre' className='font-bold block text-stone-300'>
            Nombre de Evento
          </label>
          <input
            type='text'
            id='nombre'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#030303]'
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
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#030303]'
            placeholder='Nombre del Contacto'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='font-bold block text-stone-300'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#030303]'
            placeholder='email de contacto'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='fecha' className='font-bold block text-stone-300'>
            Fecha de evento
          </label>
          <input
            type='date'
            id='fecha'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#030303]'
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
            className='border-2 p-2 mt-2 rounded-md w-full placeholder-gray-400 bg-[#030303]'
            placeholder='Detalles del Evento'
          ></textarea>
        </div>

        <input
          type='submit'
          className='py-2 bg-[#2D44F5] text-white font-bold text-lg rounded-lg inline-block  w-full hover:bg-[#2c76ffef] transition-colors'
          value='Registrar'
        />
      </form>
    </div>
  );
};

export default Formulario;
