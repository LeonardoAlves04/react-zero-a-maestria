import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do app js</p>
      <p className='secondP'>Este também vem do app js</p>
    </div>
  );
}

export default App;
