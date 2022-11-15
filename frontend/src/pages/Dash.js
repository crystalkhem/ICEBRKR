import { useEffect, useState } from "react"
import EventDetails from "../components/EventDetails"
import './Dash.css';

const Dash = () => {
    const [events, setEvents] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:4000/api/events')
            const json = await response.json()

            if (response.ok) {
                setEvents(json)
            }
        }

        fetchEvents()
    }, [])

    return(
        <div className="dash">
            <div className="workouts">
            <h3><u><i>Upcoming events</i></u></h3> 
                {events && events.map((event) => (
                    <EventDetails key={event._id} event={event} />
                ))}
            </div>
        </div>
    )
}


export default Dash
