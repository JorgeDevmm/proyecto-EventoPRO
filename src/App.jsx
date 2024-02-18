import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';

function App() {
  return (
    <div className='bg-neutral-900 h-screen'>
      <Header />
      <div className='mt-12 md:flex mx-auto'>
        <Formulario />
        <ListadoEventos />
      </div>
    </div>
  );
}

export default App;
