import Evento from './Evento';

const ListadoPacientes = () => {
  return (
    <div className='md:w-2/4 bg-gradient-to-r from-[#393A3A] to-[#030303]  text-white  md:h-screen  overflow-y-scroll'>
      <h2 className='text-center font-bold text-xl lg:text-3xl  pt-8'>
        Listado de Eventos
      </h2>
      <p className='text-center text-lg mt-2 text-white mb-10'>
        Administra tus {''}
        <span className='text-rose-600 font-bold'>Eventos y reuniones</span>
      </p>

      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
      <Evento />
    </div>
  );
};

export default ListadoPacientes;
