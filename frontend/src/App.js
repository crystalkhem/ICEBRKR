import "./App.css";
import Categories from "./pages/Categories";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";
import Chat from "./pages/Chat";
import Dash from "./pages/Dash";
import Match from "./pages/Match";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      {/* <b><h1>WELCOME TO ICEBRKR <i>!!</i></h1></b>  */}
      <BrowserRouter>
        <Navbar />
        <br />
        <div className="pages">
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dash" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/dash" />}
            />
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/dash" element={user ? <Dash />: <Navigate to="/login"/>} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/event" element={<Event />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/match" element={user ? <Match />: <Navigate to="login"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
