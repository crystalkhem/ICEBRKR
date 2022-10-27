import { useEffect, useState } from "react"
import EventDetails from "../components/EventDetails"

const Dash = () => {
    const [events, setEvents] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:4000/events')
            const json = await response.json()
            console.log('yee yee bitches')

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchEvents()
    }, [])

    return(
        <div className="dash">
            <div className="workouts">
            <h3><u><i>upcoming events</i></u></h3> 
                {events && events.map((event) => (
                    <EventDetails key={event._id} event={event} />
                ))}
            </div>
        </div>
    )
}


export default Dash
