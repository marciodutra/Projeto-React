import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/frase'
import List from './components/List'

function App() {

  const nome = "Maria"

  const name = "Márcio"  
  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />       
      <SayMyName nome="Márcio" />
      <SayMyName nome="Pedro" />
      <SayMyName nome={nome} />
      <Pessoa nome="Márcio" idade="43" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
