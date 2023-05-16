import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    { modelo: "ferrari", potencia: "500 cavalos", cor: "preto" },
    { modelo: "mustang", potencia: "400 cavalos", cor: "azul" },
    { modelo: "lamborghini", potencia: "600 cavalos", cor: "roxo" },
  ];
  return (
    <div className="App">
      <h1 className='title'>Lista dos carros</h1>
      <div className='car-container'>
        {cars.map((car) => (
          <CarDetails car={car} />
        ))}
      </div>

    </div>
  );
}

export default App;
