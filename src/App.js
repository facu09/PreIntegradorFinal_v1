// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';   //css 
// importo componentes
import Toast from './components/Toast/Toast'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Router from './Router/Router';

function App() {

  const { message, isError, loading } = useSelector (sotre => sotre.apiReducer);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* Aca podria usar dependiendo de Estados a traves de redux ==- mostrar diferentes NavBar */}
      
      {loading && <div 
      style={{
        width:'100vw', height:'100vh', position: 'absolute', 
        backgroundColor: 'rgba(tr234,tr234,tr234,.4)' }}>
          Loading
      </div>}  

      {/* <header className='App-header'> */}
        {isError && <Toast message={message}/>}
        <NavBar />
        <Router />
        <Footer />
        
      {/* </header>   */}
     
        {/* El componente Login lo va a cargar la pagina a traves del router */}
        {/* de la clase agregada de Juli */}
        {/* <Login /> */}
        
        {/* Codigo original de React: --> Falta Borrarlo!! lo dejo de ejemplo */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload. 
          And tendria que mostrarse en pantalla.
        </p> */}
      
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
