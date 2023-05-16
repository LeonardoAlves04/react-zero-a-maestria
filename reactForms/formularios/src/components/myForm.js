import styles from "./MyForm.css"

const MyForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Seu nome completo" />
                </div>
                <input type="submit" placeholder="Enviar" />
                <label>
                    <input type="email" name="email" placeholder="digite aqui o seu e-mail" />
                </label>
            </form>
        </div>
    )
}

export default MyForm