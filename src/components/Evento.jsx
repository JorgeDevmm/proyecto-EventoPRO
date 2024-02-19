const Evento = () => {
  return (
    <>
      <div className='m-3 bg-[#030303] px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre: {''}
          <span className='text-white font-normal normal-case'>Graduación</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Nombre de Contacto: {''}
          <span className='text-white font-normal normal-case'>
            Luis Morales
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Email: {''}
          <span className='text-white font-normal normal-case'>
            luis12morales@gmail.com
          </span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Fecha de Evento: {''}
          <span className='text-white font-normal normal-case'>12/05/2023</span>
        </p>
        <p className='font-bold mb-3 text-rose-600 uppercase'>
          Detalle de Evento: {''}
          <span className='text-white font-normal normal-case'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            animi fugit id veritatis itaque minima aspernatur asperiores
            blanditiis labore, tempora dolores! Libero perspiciatis labore
            deleniti molestiae, tenetur reiciendis est commodi?
          </span>
        </p>
      </div>
    </>
  );
};


export default Evento;