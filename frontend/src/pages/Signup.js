import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className="create">
        <form className="signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>Email: </label>
         <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <br />

        <label>Password: </label>
         <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        <br />
        <button disabled={isLoading}>sign up</button>
        {error && {error}}
        <br/>
        
        </form>
        <p><b>already have an account?</b> <Link to="/">log in here.</Link></p>
        </div>
    )
}

export default Signup 