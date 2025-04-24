import React, { useEffect } from "react";
import ProductCard from "../common/ProductCard";
import { useProductsStore } from "../../store/products";

const AllProductSection = () => {
  const { products, getAllProducts } = useProductsStore();

  
  

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className=" bg-white py-[100px] px-[227px]">
      <h1 className=" mb-[50px] w-full text-center font-semibold text-5xl text-[#403D39]">
        All Products
      </h1>

      <div className=" w-full grid grid-cols-5 gap-4">
        {products?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllProductSection;
