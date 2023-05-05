import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {

  const name = "Leonardo"
  return (
    <div className="App">
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
    </div >
  );
}

export default App;
