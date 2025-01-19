import React from "react";

const Button = ({ label, light }) => {
  return (
    <button
      className={`w-fit border font-mono font-semibold uppercase ${light ? "border-white text-white hover:bg-white hover:text-black" : "border-black hover:bg-black hover:text-white"} px-4 py-2 tracking-[0.3em]`}
    >
      {label}
    </button>
  );
};

export default Button;
