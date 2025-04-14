import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  // TODO: UPDATE THE LINK HREF

  return (
    <Link to={"/"}>
      <img
        className=" w-full"
        src="https://ghorerbazar.com/cdn/shop/files/gb_banner.jpg?v=1743691384"
      />
    </Link>
  );
};

export default HeroSection;
