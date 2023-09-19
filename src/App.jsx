import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import "./index.css";

const App = () => {
  
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
    
};

export default App;
