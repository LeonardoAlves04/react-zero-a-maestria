import './App.css';
import { useState, useEffect } from "react"
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const { data: items } = useFetch(url)

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product),
    });

    const addedProducts = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProducts])
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type='text' value={name} name='name' onChange={(e) => setName(e.target.value)}></input>
          </label>
          <label>
            Preço:
            <input type='number' value={price} name='price' onChange={(e) => setPrice(e.target.value)}></input>
          </label>
          <input type='submit' value="Criar"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
