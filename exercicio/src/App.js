import './App.css';
import Wpp from "./assets/wpp.jpg"

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src="./logo512.png" alt="logo"></img>
      <img src={Wpp} alt="rick"></img>
    </div >
  );
}

export default App;
