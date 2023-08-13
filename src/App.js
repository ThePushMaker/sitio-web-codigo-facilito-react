import './App.css';
import Menu from './components/Menu';

function App() {
  const currentURL = window.location.pathname;
  function renderContent () {
    switch(currentURL) {
      case "/":
        break;
      case "/personajes":
        break;
      case "/citas":
        break;
      case "/episodios":
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Menu />
      {
        renderContent()
      }
    </div>
  );
}

export default App;
