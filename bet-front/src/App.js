import './App.css';
// import Cadastro from './components/Cadastro/cadastro';
import './components/Login/login'
import AppRouter from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter></AppRouter>
      </header>
     
    </div>
  );
}

export default App;
