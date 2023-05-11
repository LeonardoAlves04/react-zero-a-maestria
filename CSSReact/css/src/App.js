import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  const n = 8
  const name = "LeozinhoGameplays"
  const redTitle = false
  return (
    <div className="App">

      <h1>React com CSS</h1>

      <MyComponent />

      <p>Este parágrafo é do app js</p>

      <p className='secondP'>Este também vem do app js</p>

      <p style={{ color: "red", backgroundColor: "cyan", padding: "50px" }}>Este elemento foi estilizado de forma inline</p>

      <h2 style={n > 10 ? { color: "RED" } : { color: "GREEN" }}>CSS INLINE DE CRIA</h2>

      <h2 style={name === "LeozinhoGameplays" ? { color: "blue", backgroundColor: "yellow" } : { color: "black", backgroundColor: "cyan" }}>TESTANDO NOME LEOZINHO GAMEPLAYS</h2>

      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter a classe dinamica</h2>

    </div >
  );
}

export default App;
