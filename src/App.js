import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = "Maria"

  const name = "Márcio"  
  return (
    <div className="App">       
      <SayMyName nome="Márcio" />
      <SayMyName nome="Pedro" />
      <SayMyName nome={nome} />
      <Pessoa nome="Márcio" idade="43" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
