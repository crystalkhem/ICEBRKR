import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
    const { user } = useAuthContext();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [major, setMajor] = useState('')
    const [bio, setBio] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault()
        const id = user._id
        const profile = {name, age, major, bio}

        const response = await fetch('http://localhost:4000/api/profiles/:id', {
            method: 'PATCH',
            body: JSON.stringify(profile),
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
            console.log('new profile added', json)
        }

    }

    return (
        <div className="create">
        <form className="create_profile" onSubmit={handleSubmit} >
        <h1>Time To Create Your Profile!</h1>
        <h2>Please Enter Profile Details:</h2>

        <label>Name: </label>
         <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        <br />

        <label>Age: </label>
         <input type="text" onChange={(event) => setAge(event.target.value)} value={age} />
        <br />

        <label>Major: </label>
         <input type="text" onChange={(event) => setMajor(event.target.value)} value={major} />
        <br />

        <label>Brief Bio: </label>
         <input type="text" onChange={(event) => setBio(event.target.value)} value={bio} />
        <br />


        <button>submit</button>
        <br/>

        </form>
          </div>
    )
}

export default Profile