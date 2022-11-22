import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const id = user?._id
    const [ firstName, setFirstName] = useState('')
    const [ lastName, setLastName] = useState('')
    // const [age, setAge] = useState(user.age)
    // const [major, setMajor] = useState(user.major)
    // const [bio, setBio] = useState(user.bio)
    const [image, setImage] = useState('')

    const [error, setError] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault()
        const profile = {firstName, lastName, image}

        const response = await fetch(`http://localhost:4000/api/user/${id}/edit`, {
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
        
        navigate('/profile');


    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        setFileToBase(file);
      }
    
      const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
      }

    return (
        <div className="create">
        <form className="create_profile" onSubmit={handleSubmit} >
        <h1>Edit Your Profile Here!!</h1>

        <label>First Name: </label>
         <input type="text" onChange={(event) => setFirstName(event.target.value)} value={firstName} />
        <br />
        <label>Last Name: </label>
         <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName} />
        <br />

        {/* <label>Age: </label>
         <input type="text" onChange={(event) => setAge(event.target.value)} value={age} />
        <br />

        <label>Major: </label>
         <input type="text" onChange={(event) => setMajor(event.target.value)} value={major} />
        <br /> */}

        {/* <label>Brief Bio: </label>
         <input type="text" onChange={(event) => setBio(event.target.value)} value={bio} />
        <br /> */}

        <b><label>Upload Image: </label></b>
         <input onChange={handleImage} type="file" id="imageupload"  name="image"/>
        <br /> 


        <button>Update</button>
        <br/>

        </form>
          </div>
    )
}

export default Profile