import { EventsContext } from "../context/EventsContext";
import { useContext } from "react";

export const useEventsContext = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw Error(
      "Incorrect Format"
    );
  }

  return context;
};
