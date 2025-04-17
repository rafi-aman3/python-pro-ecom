import React from "react";
import { Link } from "react-router";

const ProductCard = ({ item }) => {
  // TODO: Add to cart function
  //TODO: LINK SHOULD BE UPDATED TO PRODUCT DETAIL PAGE

  const quickAddtoCart = () => {};

  return (
    <Link to={"/products/" + item?.id}>
      <div className="flex rounded-[14px] border border-gray-100 shadow overflow-hidden w-[286px] h-[432px]  flex-col justify-center gap-3 items-center p-0">
        <img
          className=" w-full h-[360px] object-cover rounded-b-[14px] "
          src="https://placehold.co/400"
        />
        <div className="px-[14px] w-full">
          <p className=" text-[#404040] text-[22px]">{item?.name}</p>

          <div>
            <p className=" text-black">{item?.base_price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
