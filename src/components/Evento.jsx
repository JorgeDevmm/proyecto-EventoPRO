const Evento = ({evento} ) => {
  
  const {nombre,contacto,email,fecha,detalle } = evento;

  return (
    <>
      <div className='m-3 bg-[#030303] px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre: {''}
          <span className='text-white font-normal normal-case'>
            {nombre}
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre de Contacto: {''}
          <span className='text-white font-normal normal-case'>
            {contacto}
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Email: {''}
          <span className='text-white font-normal normal-case'>
            {email}
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Fecha de Evento: {''}
          <span className='text-white font-normal normal-case'>
            {fecha}
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Detalle de Evento: {''}
          <span className='text-white font-normal normal-case'>
            {detalle}
          </span>
        </p>
      </div>
    </>
  );
};

export default Evento;
