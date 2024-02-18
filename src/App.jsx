import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gray-900 h-full'>
      <Header />
      <div className='mt-8 md:flex container mx-auto '>
        <Formulario />
        <ListadoEventos />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
