import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log(email,password)
    }

    return (
        <div className="signup">
        <form className="signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>Email: </label>
         <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <br />

        <label>Password: </label>
         <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        <br />
        <button>log in</button>
        </form>
        <p><b>already have an account?</b> <Link to="/">log in here.</Link></p>
        </div>
    )
}

export default Signup 