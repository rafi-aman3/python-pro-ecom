import React from "react";
import toast from "react-hot-toast";
import HeroSection from "../components/Home/HeroSection";
import AllProductSection from "../components/Home/AllProductSection";

const HomePage = () => {
  const onClickHandler = () => {
    toast.success("HOT TOAST SETUP DONE!");
  };
  return (
    <>
    <HeroSection/>
    <AllProductSection/>
    
    </>
  );
};

export default HomePage;
