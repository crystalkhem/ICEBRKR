import { useEffect, useState } from "react";
import EventDetails from "../components/EventDetails";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Dash.css";

const Dash = () => {
  const [events, setEvents] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:4000/api/events", {
        header: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setEvents(json);
      }
    };

    if (user) {
      fetchEvents();
    }
  }, [user]);

  return (
    <div className="dash">
      <div className="workouts">
        <h3>
          <b>Upcoming Events</b>
        </h3>
        {events &&
          events.map((event) => <EventDetails key={event._id} event={event} />)}
      </div>
    </div>
  );
};

export default Dash;
