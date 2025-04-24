import { ShoppingCart, UserRound } from "lucide-react";
import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router";
import { useCartStore } from "../../store/cart";

const Navbar = () => {
  const { cart } = useCartStore();
  return (
    <div className="navbar flex w-full justify-center items-center bg-white shadow-sm">
      <div className=" max-w-5xl px-4 navbar">
        <div className="navbar-start">
          <Link to={"/"}>
            <a className="text-xl font-bold text-[#EB5E28]">GG</a>
          </Link>
        </div>
        <div className="navbar-end">
          <NavButton
            icon={<UserRound />}
            onClick={() => {
              console.log("PROFILE PAGE");
            }}
          />

          <NavButton
            item={cart}
            onClick={() => {
              console.log("CART PAGE");
            }}
            icon={<ShoppingCart />}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
