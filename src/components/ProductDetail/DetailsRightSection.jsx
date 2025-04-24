import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useProductsStore } from "../../store/products";
import { Globe, Heart, Truck } from "lucide-react";
import ProductVariants from "./ProductVariants";
import AddToCart from "./AddToCart";

export const DetailsRightSection = () => {
  const { id } = useParams();
  const { singleProduct, getProductById } = useProductsStore();
  console.log(singleProduct, "singleProduct");

  const { name, base_price, description, variants } = singleProduct || {};

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <div className="flex flex-col gap-8 w-2/5">
      <div className="flex gap-4 justify-between">
        <div className="text-2xl text-black">{name ?? "NEW PRODUCT"}</div>
        <Heart
          className=" cursor-pointer hover:opacity-70 active:opacity-100"
          onClick={() => console.log("ADD TO WISHLIST")}
          color="red"
        />
      </div>

      <div className="flex gap-4 justify-start items-center text-2xl">
        <p className=" text-3xl text-[#414141]">${base_price ?? 0}</p>
        {/* <div>|</div>
        <div className="flex gap-4 justify-start">
          <img src="/svg/star.svg" className="w-4 h-4" alt="heart" />
              <img src="/svg/star.svg" className="w-4 h-4" alt="heart" />
              <img src="/svg/star.svg" className="w-4 h-4" alt="heart" />
              <img src="/svg/star.svg" className="w-4 h-4" alt="heart" />
              <img src="/svg/star.svg" className="w-4 h-4" alt="heart" />
        </div>
        <div className="text-xl">( 32 review )</div> */}
      </div>
      <div className="py-2">
        <hr className="my-2  text-[#414141]" />
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div>
        {description ? (
          <p className=" text-base text-[#414141]">{description}</p>
        ) : (
          ""
        )}

        {/* HTML RENDERED */}
        {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
      </div>

      {/* PRODUCT VARIANTS   */}
      {/* TODO: WORK ON IT */}
     {/* <ProductVariants/> */}

      {/* ADD TO CART */}
      <AddToCart/>

      {/* SHIPPING DETAILS */}
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-4 ">
          <Globe color="#414141" />
          <p className=" text-[#414141]">
            Free worldwide shipping on all orders over $100
          </p>
        </div>
        <div className="flex gap-4 ">
          <Truck color="#414141" />
          <p className="text-[#414141]">
            Delivers in: 3-7 Working Days Shipping & Return
          </p>
        </div>
      </div>
    </div>
  );
};
