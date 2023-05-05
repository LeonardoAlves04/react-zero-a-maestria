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
      <CarDetails km={" " + 1000000} brand=" Toyota" color=" blue" />
    </div >
  );
}

export default App;
