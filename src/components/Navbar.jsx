import { NavLink, useNavigate } from "react-router-dom";
import {FaShoppingCart } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { loggedOut } from "../redux/Slices/authenticationSlice";
import { clear } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate=useNavigate();
  const cart=useSelector((state)=>state.cart)
  const login=useSelector((state)=>state.login.value)
  const dispatch=useDispatch();
  function logoutHandler(){
    dispatch(loggedOut())
    toast.success('Logout Successfully');
    dispatch(clear())
    navigate("/")
  }
  return (
    <div className="w-full bg-slate-900 py-4 relative">
      <nav className="max-w-[1080px] flex justify-between mx-auto items-center relative px-2 ">
        <NavLink to="/">
          <img src="./shop-logo-cart.png" alt="logoPic" className=" w-[120px] h-[40px]"></img>
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/">
            <div className="text-xl text-white">Home</div>
          </NavLink>

          {
            !login &&
              <NavLink to="/login">
                <div className="text-xl text-white">Login</div>
              </NavLink>
          }
          {
            !login &&
              <NavLink to="/signup">
                <div className="text-xl text-white">Signup</div>
              </NavLink>
          }
          
          {
            login && 
              <NavLink to="/">
                <div onClick={logoutHandler} className="text-xl text-white">Logout</div>
              </NavLink>
          }
          
          {login &&
            <NavLink to="/cart">

              <FaShoppingCart fill="white" fontSize={25} />
              {
                cart.length>0?<span className="absolute -top-1 right-0 bg-green-500 p-1 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>:<></>
              }
              
            </NavLink>
          }
          

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
