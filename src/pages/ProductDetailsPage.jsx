import React from "react";
import { useParams } from "react-router";
import { BreadCrumb } from "../components/common/BreadCrumb";
import DetailsSection from "../components/ProductDetail/DetailsSection";

const ProductDetailsPage = () => {
  const { id } = useParams();

  //   TODO: PRODUCT DETAILS PAGE DESIGN
  return (
    <div className=" mx-auto bg-white">
      <div className="container mx-auto py-8"> 
      <BreadCrumb />
      <DetailsSection/>
      </div>

    </div>
  );
};

export default ProductDetailsPage;
