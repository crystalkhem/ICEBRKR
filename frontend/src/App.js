import './App.css';
import Categories from './pages/Categories'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Event from './pages/Event'
import Chat from './pages/Chat'
import Dash from './pages/Dash'
// import Match from './pages/Match'
import Profile from './pages/ProfileCreate';
import Profiles from './pages/Profiles'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
       {/* <b><h1>WELCOME TO ICEBRKR <i>!!</i></h1></b>  */}
      <BrowserRouter>
      <Navbar/>
      <br/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dash" exact element={<Dash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/event" element={<Event />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/match" element={<Match />} /> */}
          <Route path="/profileCreate" element={<Profile />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </div>
      </BrowserRouter>    
    </div>
    );
}

export default App;
