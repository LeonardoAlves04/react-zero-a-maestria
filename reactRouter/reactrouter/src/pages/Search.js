import { useSearchParams, Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const { data: items, loading, error } = useFetch(url)
    return (
        <div><h1>Resultados disponíveis:</h1>
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        {item.name} - R$: {item.price}
                        <Link to={`products/${item.id}`}>Detalhes</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default Search