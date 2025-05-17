import { createContext, useEffect, useState } from "react";
import { product } from "../assets/asset";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const  ShopContextProvider =(props)=>{
    const navigate = useNavigate();
    const currency = 'NPR'
    const delivery =10
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems ,setCartItems]= useState({});
    const addtoCart = (itemId, size) => {
        if (!size) {
          toast.error('Please Enter the size');
          return;
        }
      
        setCartItems(prevState => {
          const updatedCart = { ...prevState };
          
          // If item already exists in the cart
          if (updatedCart[itemId]) {
            // If the size already exists, increment the quantity
            if (updatedCart[itemId][size]) {
              updatedCart[itemId][size] += 1;
            } else {
              updatedCart[itemId][size] = 1;
            }
          } else {
            // If item does not exist, create a new entry for it
            updatedCart[itemId] = { [size]: 1 };
          }
          return updatedCart;
        });
      };
      
      const getCartCount = () => {
        return Object.values(cartItems).reduce((totalCount, item) => {
          return totalCount + Object.values(item).reduce((sum, quantity) => sum + quantity, 0);
        }, 0);
      };
      
      const updateCart = (itemId, size, quantity) => {
        if (quantity <= 0) return;
      
        setCartItems(prevState => {
          const updatedCart = { ...prevState };
          updatedCart[itemId] = { ...updatedCart[itemId], [size]: quantity };
          return updatedCart;
        });
      };
      
    const getCartAmount =  ()=>{
        let totalAmount = 0;
        for (const id in cartItems){
          let itemInfo = product.find((product)=>product._id = id);
          for (const size in cartItems[id]){
            try{
                if(cartItems[id][size]>0){
                    totalAmount +=itemInfo.price * cartItems[id][size]
                }
            }
            catch(err){
           console.log(err)
            }
          }
        }
    return totalAmount;
    }
    const value = {
        product,currency ,delivery,
        search,setSearch,showSearch,setShowSearch,cartItems,addtoCart,getCartCount,updateCart,getCartAmount,navigate
    }
    useEffect(()=>{
   console.log(cartItems);
    },[cartItems])
    return (    
     <ShopContext.Provider value={value}>
        {props.children}
     </ShopContext.Provider>
    )
}
export default ShopContextProvider;