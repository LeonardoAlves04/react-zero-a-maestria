import './App.css'
import MyForm from './components/myForm';

function App() {
  return (
    <div className="App">
      <h2>Formularios em react</h2>
      <MyForm user={{ name: "Leonardo", email: "leonardo3213213211@gmail.com", bio: "sou um programador", role: "admin" }} />
    </div>
  );
}

export default App;
