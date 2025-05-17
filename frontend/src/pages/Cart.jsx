import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../Components/Title';
import { MdDelete } from "react-icons/md";
import CartTotal from '../Components/CartTotal';
import { asset } from '../assets/asset';

const Cart = () => {
  const { product, currency, cartItems, updateCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    console.log('cartItems:', cartItems);
    console.log('product:', product);

    let tempData = [];
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          tempData.push({
            _id: id, 
            size: size,
            quantity: cartItems[id][size]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, product]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your" text2="Cart" />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = product.find((product) => product._id === item._id);
          
          // Check if the product exists
          if (!productData) {
            return <div key={index}>Product not found</div>;
          }

          return (
            <div key={index} className="py-4 border-t border-b border-gray-300 grid grid-cols-[4fr_1fr_1fr] items-center gap-4">
              <div className="flex items-start gap-4">
                <img 
                  src={productData?.image?.[0] || asset.black_coat} 
                  alt="Product" 
                  className="w-16 sm:w-24" 
                />
                <div>
                  <p className="text-xl p-4 mt-8">{productData.name}</p>
                  <div className="flex gap-4 items-center px-4">
                    <p>{currency}{productData.price}</p>
                    <p>{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                type="number"
                className="text-xl p-2 w-12 bg-slate-100"
                min={1}
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  if (!isNaN(newQuantity) && newQuantity > 0) {
                    updateCart(item._id, item.size, newQuantity);
                  }
                }}
              />
              <MdDelete
                className="cursor-pointer w-[32px] h-[24px] hover:h-[32px] transition-all ease-in-out"
                onClick={() => updateCart(item._id, item.size, 0)} // Remove item from cart
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[440px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default Cart;
