import styles from "./MyForm.css"
import { useState } from "react"

const MyForm = ({ user }) => {
    // aula 3: gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => (setName(e.target.value))


    // aula 5: envio de formularios

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando formulário");
        console.log(name, email, bio, role);

        // aula 7: resetando formularios
        setName("");
        setEmail("");
        setBio("");
        setRole("")
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
                {/* aula 9 - textarea */}
                <label>
                    <span>
                        Bio:
                    </span>
                    <textarea name="bio" placeholder="escreva a sua profissão aqui" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                    <input type="submit"></input>
                </label>
                <label>
                    <span>Função dentro da empresa:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="editor">editor</option>
                        <option value="admin">administrador</option>
                        <option value="supervisor">supervisor</option>
                    </select>
                </label>
            </form>
        </div >
    )
}

export default MyForm