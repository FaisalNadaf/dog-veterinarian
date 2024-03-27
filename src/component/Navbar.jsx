import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 w-full bg-[#EAAE00] m-0 p-0 flex items-center px-20 justify-between	">
      <img
        src="src\assets\images\dogLogo.png"
        alt="img not found"
        className="h-16 w-16 "
      />
      <ul className="flex text-3xl font-bold text-black	w-1/2 justify-evenly	">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
