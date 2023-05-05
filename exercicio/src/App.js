import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const name = "Leonardo"
  return (
    <div className="App">
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails km={1000000} brand=" Toyota" color=" azul" newCar={false} />
      <CarDetails km={1000000} brand=" fiat" color=" vermelho" newCar={false} />
      <CarDetails km={0} brand=" vw" color=" preto" newCar={true} />
      <CarDetails km={1000000} brand=" chevrollet " color=" cinza" newCar={false} />
    </div >
  );
}

export default App;
