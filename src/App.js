import './App.css';
import Cabecera from './components/cabecera';
import Cuerpo from './components/cuerpo';


function App() {
  let variableTitulo = "";
  
  return(
    <div className="App">
      <Cabecera titulo={variableTitulo}/>
      <Cuerpo cambiarTitulo={variableTitulo}/>
    </div>
    )
  
}

export default App;
