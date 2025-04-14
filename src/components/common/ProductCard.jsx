import React from "react";
import { Link } from "react-router";

const ProductCard = ({ item }) => {
  // TODO: Add to cart function
  //TODO: LINK SHOULD BE UPDATED TO PRODUCT DETAIL PAGE

  const quickAddtoCart = () => {};

  return (
    <div className=" flex rounded  flex-col justify-center gap-5 items-center p-3 border border-[#CCC5B9]">
      <img className=" size-[183px]" src="https://placehold.co/400" />
      <Link to={`/`}>
        <p className=" text-black">{item?.name}</p>
      </Link>
      <p className=" text-black">{item?.base_price}</p>
      <button onClick={quickAddtoCart} className="btn bg-[#EB5E28] border-none">
        Quick Add
      </button>
    </div>
  );
};

export default ProductCard;
