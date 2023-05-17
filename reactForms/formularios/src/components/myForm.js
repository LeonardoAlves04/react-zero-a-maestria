import styles from "./MyForm.css"
import { useState } from "react"

const MyForm = () => {
    // aula 3: gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => (setName(e.target.value))

    console.log(name)
    console.log(email)

    return (
        // aula 1 : criação de formulários
        < div >
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        onChange={handleName} />
                </div>
                <input type="submit" placeholder="Enviar" />
                {/* aula 2: label envolvendo input */}
                <label>
                    <input type="email"
                        name="email"
                        placeholder="Digite aqui o seu e-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
            </form>
        </div >
    )
}

export default MyForm