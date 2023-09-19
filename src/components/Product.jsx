import { useDispatch, useSelector } from "react-redux";
import {remove,add} from "../redux/Slices/cartSlice"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = ({item}) => {
  const isLogin=useSelector((state)=>state.login.value)
  const cart=useSelector((state)=>state.cart)
  const navigate=useNavigate();
  const dispatch=useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("item removed from cart")
  }
  function addToCart(){
    dispatch(add(item))
    toast.success("item added to cart")
  }
  function moveToSignin(){
    navigate('/login')
  }
  return(
    <div className="max-w-[340px] md:max-w-[250px] rounded-xl flex flex-col justify-between p-4 mb-4 border-[2px] box-shadow transition-all duration-500">
      <div className="p-2">
        <p className="mb-4 font-bold text-sm">{item.title}</p>
        <p className="text-xs">{item.description.substring(0,150)}...</p>
      </div>
      <div className="w-full p-2">
        <img src={item.image} alt="productPic" className="max-w-[160px] max-h-[150px] mx-auto p-1"></img>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-green-700 font-semibold text-sm">${item.price}</p>
        {
          cart.some((p)=>p.id===item.id)? 
            <button className="bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-full" onClick={removeFromCart}>REMOVE FROM CART</button>:
              <button className="bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-full" onClick={isLogin?addToCart:moveToSignin}>ADD TO CART</button>
        }
        
      </div>
    </div>
  )
};

export default Product;
