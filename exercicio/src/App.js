import './App.css';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails'
import Timer from './components/Timer';



function App() {
  const name = "Leonardo"

  const cars = [
    { id: 1, brand: "chevrolett", color: "branco", newCar: false, km: 3210 },
    { id: 2, brand: "hyundai", color: "preto", newCar: false, km: 3213210 },
    { id: 3, brand: "honda", color: "cinza", newCar: true, km: 0 },
  ]

  const users = [
    { id: 4, name: "Leonardo", age: 19, job: "programador" },
    { id: 5, name: "Maria", age: 21, job: "maquiadora" },
    { id: 6, name: "Pedrinho", age: 15, job: "estudante" },
    { id: 7, name: "José", age: 12, job: "estudante" },
  ];

  function showMessage() {
    console.log("executando a função!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails km={1000000} brand=" Toyota" color=" azul" newCar={false} />
      <CarDetails km={1000000} brand=" fiat" color=" vermelho" newCar={false} />
      <CarDetails km={0} brand=" vw" color=" preto" newCar={true} />
      <CarDetails km={1000000} brand=" chevrollet " color=" cinza" newCar={false} />
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}
      <Fragment propFragment={"teste testando 123123213"} />
      <Container>
        <p>componente filho</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age} />
      ))}

      <Timer />
    </div >
  );
}

export default App;
