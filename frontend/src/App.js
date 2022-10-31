import './App.css';
import Categories from './pages/Categories'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Event from './pages/Event'
import Chat from './pages/Chat'
import Dash from './pages/Dash'
import Match from './pages/Match'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const {context} = useAuthContext()

  return (
    <div className="App">
       {/* <b><h1>WELCOME TO ICEBRKR <i>!!</i></h1></b>  */}
      <BrowserRouter>
      <Navbar/>
      <br/>
      <div className="pages">
        <Routes>
          <Route path="/" element={context ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!context ? <Login />: <Navigate to="/dash" />} />
          <Route path="/dash"  element={< Dash />} />
          <Route path="/signup" element={!context ? <Signup />: <Navigate to="/" />} /> 
          <Route path="/categories" element={<Categories />} />
          <Route path="/event" element={<Event />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </div>
      </BrowserRouter>    
    </div>
    );
}

export default App;
