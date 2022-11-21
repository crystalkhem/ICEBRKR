import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EventsContextProvider } from "./context/EventsContext";
import { AuthContextProvider } from "./context/AuthContext";
import { UsersContextProvider } from "./context/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EventsContextProvider>
        <UsersContextProvider>
        <App />
        </UsersContextProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
