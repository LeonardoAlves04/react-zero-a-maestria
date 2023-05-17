import styles from "./MyForm.css"
import { useState } from "react"

const MyForm = ({ user }) => {
    // aula 3: gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleName = (e) => (setName(e.target.value))

    console.log(name)
    console.log(email)

    // aula 5: envio de formularios

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulário");
        console.log(name, email);

        setName("");
        setEmail("");
    }

    return (
        // aula 1 : criação de formulários
        < div >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        onChange={handleName}
                        value={name} />
                </div>
                <input type="submit" placeholder="Enviar" />
                {/* aula 2: label envolvendo input */}
                <label>
                    {/* aula 4: alkteração de state inline */}
                    <input type="email"
                        name="email"
                        placeholder="Digite aqui o seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                </label>
            </form>
        </div >
    )
}

export default MyForm