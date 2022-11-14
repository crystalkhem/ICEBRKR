import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault()

        const events = {name, date, time, description, category}

        const response = await fetch('http://localhost:4000/events', {
            method: 'POST',
            body: JSON.stringify(events),
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
            console.log('new event added', json)
        }


        console.log('this code ran')
    }

    return (
        <div className="create">
        <form className="signup" onSubmit={handleSubmit} >
        <h2>Create Your Event!</h2>

        <label>Name of Event: </label>
         <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        <br />

        <label>Date: </label>
         <input type="date" onChange={(event) => setDate(event.target.value)} value={date} />
        <br />

        <label>Time: </label>
         <input type="time" onChange={(event) => {setTime(event.target.value)
        console.log(event.target.value)}} value={time} />
        <br />

        <label>Category: </label>
          <input type="radio" onChange={(event) => setCategory(event.target.value)} value='music' />
          music <input type="radio" onChange={(event) => setCategory(event.target.value)} value='sports' />
         sports<input type="radio" onChange={(event) => setCategory(event.target.value)} value='movies' /> movies <br />

        <label>Description: </label>
         <input type="text" onChange={(event) => setDescription(event.target.value)} value={description} />
        <br />


        <button>submit</button>
        <br/>
        
        </form>
        </div>
    )
}

export default Signup 