const EventDetails = ({ event }) => {
    return(
        <div className="event-details" >
        <br/>
        <small> <br/><b>EVENT:</b> {event.name}
        <br/><b>DATE:</b> {event.date}
        <br/><b>TIME:</b> {event.time}
        <br/><b>DESCRIPTION:</b> {event.description}
        {/* <br/><b>created at:</b> {event.createdAt} */}
        </small>
        </div>
    )
}

export default EventDetails
