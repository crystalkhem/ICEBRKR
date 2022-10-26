import './App.css';
import Categories from './pages/Categories'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <b><h1>WELCOME TO ICEBRKR <i>!!</i></h1></b> 
      <BrowserRouter>
      <Navbar/>
      <br/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
      </BrowserRouter>    
    </div>
    );
}

export default App;
