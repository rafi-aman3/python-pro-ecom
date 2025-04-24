import React from "react";
import ProductImages from "./ProductImages";
import { DetailsRightSection } from "./DetailsRightSection";
import { useParams } from "react-router";

const DetailsSection = () => {
    
  return (
    <div className="flex flex-col pt-5 pb-36 gap-8">
      <div className="flex   gap-8">
        <ProductImages />
        <DetailsRightSection />
      </div>
    </div>
  );
};

export default DetailsSection;
