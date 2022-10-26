import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log(email,password)
    }

    return (
        <div className="categories">
        <form className="login" onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <label>Email: </label>
         <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <br />

        <label>Password: </label>
         <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        <br />
        <button>log in</button>
        </form>

        <p><b>no account?</b> <Link to="/signup">sign up here.</Link></p>
        </div>
    )
}

export default Login 