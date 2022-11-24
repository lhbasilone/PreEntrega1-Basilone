import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';





function App() {


  const mensaje = () => {
    console.log("mensaje de consola");
  }
  
  return (
    <div className="App">
      <NavBar/>
      <ItemList greeting="Hola Mundo"/>

    </div>
  );
}

export default App;
