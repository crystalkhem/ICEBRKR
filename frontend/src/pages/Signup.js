import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob ] = useState('')
    const [image, setImage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const { signup, isLoading, error  } = useSignup();


    const handleSubmit = async (event) => {
        event.preventDefault()

        // const navigate = useNavigate()

        await signup(email, password, firstName, lastName)

        // see if response is ok 


        console.log('this code ran')
        // navigate("/dash")

    }

    return (
        <div className="create">
        <form className="signup" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div style={{"display": "flex"}}>
        <label>First Name: </label>
         <input type="text" onChange={(event) => setFirstName(event.target.value)} value={firstName} />
         <br />

        <label>Last Name: </label>
         <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName} />
        <br />
        </div>

        {/* <label>Date of Birth: </label>
         <input type="date" onChange={(event) => setDob(event.target.value)} value={dob} />
        <br />

        <label>Upload Image: </label>
         <input type="image" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={(event) => setImage(event.target.value)} value={image} />
        <br /> */}

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