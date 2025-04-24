import React from "react";

const NavButton = ({ icon, onClick, item }) => {
  return (
    <div onClick={onClick} className=" flex cursor-pointer items-center text-[#EB5E28] hover:opacity-70 active:opacity-100 justify-center py-3 px-2">
      {icon} {item?? ""}
    </div>
  );
};

export default NavButton;
