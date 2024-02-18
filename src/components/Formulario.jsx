const Formulario = () => {
  return (
    <div className='bg-neutral-950 md:w-1/2 lg:w-2/5'>
      <h2 className='text-center pt-16 pb-8 text-3xl font-bold text-white'>
        Ingresar Información del Evento
      </h2>
      <p className='text-center text-lg mt-5 text-white'>
        Añade Eventos y {''}
        <span className='text-rose-600 font-bold '>Admistrarlos</span>
      </p>

      <form action='' className='flex flex-col gap-4 w-3/5 mx-auto text-white'>
        <label htmlFor='' className='font-bold'>
          Nombre
        </label>
        <input type='text' className='border-2 p-2 rounded-lg' />
        <label htmlFor='' className='font-bold'>
          Evento
        </label>
        <input type='text' className='border-2 p-2 rounded-lg' />
        <input
          type='submit'
          className='p-4 bg-amber-500 text-white font-bold text-lg rounded-lg'
          value='Ingresar'
        />
      </form>
    </div>
  );
};

export default Formulario;
