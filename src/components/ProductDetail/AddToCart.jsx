import React, { useState } from "react";
import { useCartStore } from "../../store/cart";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const {cart, addToCart } = useCartStore();
  const handleDecrement = () => setQuantity(quantity - 1);

  console.log(cart);
  

  const handleAddToCart = () => {

    // OTHER INSTRUCTION

    addToCart();
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-4 ">
        <div className=" flex items-center gap-2 text-black border border-gray-500 rounded-full px-4 py-2 text-xl">
          <button
            disabled={quantity == 1}
            onClick={handleDecrement}
            className=" p-1 cursor-pointer text-[#414141]"
          >
            -
          </button>
          <div className="p-1">{quantity}</div>
          <button
            onClick={handleIncrement}
            className=" p-1 cursor-pointer text-[#414141]"
          >
            +
          </button>
        </div>

        <div
          onClick={handleAddToCart}
          className="w-full cursor-pointer items-center flex justify-center bg-gray-900 text-white border rounded-full px-4 py-2 text-xl"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
