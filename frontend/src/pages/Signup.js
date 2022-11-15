import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const { signup, isLoading, error  } = useSignup();


    const handleSubmit = async (event) => {
        event.preventDefault()

        // const navigate = useNavigate()

        await signup(email, password)

        // see if response is ok 


        console.log('this code ran')
        // navigate("/dash")

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
        <button>submit</button>
        <br/>
        {error}
        
        </form>
        <p><b>already have an account?</b> <Link to="/login">log in here.</Link></p>
        </div>
    )
}

export default Signup 