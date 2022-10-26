import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('null')


    const handleSubmit = async (event) => {
        event.preventDefault()

        const user = {password, email}

        const response = await fetch('http://localhost:4000/user/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        // see if response is ok 
        if (!response.ok) {
            setError(json.error)
            console.log({error})
        }
        
        if (response.ok) {
            setError(null)
            console.log('new workout added', json)
        }


        console.log('this code ran')
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
        <button>log in</button>
        <br/>
        {error}
        
        </form>
        <p><b>already have an account?</b> <Link to="/">log in here.</Link></p>
        </div>
    )
}

export default Signup 