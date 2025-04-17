import React from "react";
import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const { id } = useParams();

  //   TODO: PRODUCT DETAILS PAGE DESIGN
  return <div>{id} ProductDetailsPage</div>;
};

export default ProductDetailsPage;
