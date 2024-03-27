import React from "react";

const Hero = () => {
  return (
    <div className="h-screen  bg-[#FFC400] flex items-center justify-center">
      <div className=" flex justify-evenly	 w-full">
        <div className="h-96 w-1/2   ">
          <p className="mb-8">
            <h1 className="text-6xl font-bold text-black 	text-white">
              First i want to be veterinarian
            </h1>
          </p>
          <p className="	text-2xl text-white mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad
            rerum quo labore, aspernatur minima nihil eligendi debitis provident
            culpa dolore.
          </p>
          <button className="btn btn-outline bg-[#00BFCB] hover:bg-[#EAAE00] border-white text-white mx-4 px-8">
            Contact Us
          </button>
          <button className="btn btn-outline  hover:bg-[#EAAE00] border-white text-white mx-4 px-8">
            Our Services
          </button>
        </div>
        <div className="h-96   flex ">
          <img src="src/assets/images/dogSit.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
