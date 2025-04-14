import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const onClickHandler = () => {
    toast.success("HOT TOAST SETUP DONE!");
  };
  return (
    <div>
      <h1 className=" text-amber-600 text-5xl">HOMEPAGE</h1>
      <button onClick={onClickHandler} className="btn btn-secondary">
        Secondary
      </button>
    </div>
  );
};

export default HomePage;
