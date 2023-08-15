import './App.css';
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu';
import Personajes from './components/Personajes/Personajes';
import Episodios from './components/Episodios/Episodios';
import Citas from './components/Citas';

function App() {
  const currentURL = window.location.pathname;
  function renderContent () {
    switch(currentURL) {
      case "/":
        return <Home />
      case "/personajes":
        return <Personajes/>
      case "/citas":
        return <Citas/>
      case "/episodios":
        return <Episodios/>
      default:
        return <Home/>
    }
  }

  return (
    <div className="App">
      <Menu />
      <main>
        {renderContent()}
      </main>
      <footer>
        Hecho para el taller de código facilito
      </footer>
    </div>
  );
}

export default App;
