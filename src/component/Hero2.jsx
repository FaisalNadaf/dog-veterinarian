import React from "react";

const Hero2 = () => {
  return (
    <div className="h-screen  bg-[#FFC400] flex items-center justify-center">
      <div className=" flex justify-evenly	 w-full">
        <div className="h-96 w-1/2   ">
          <p className="mb-8">
            <h1 className="text-6xl font-bold text-black 	text-white">
              As a veterinarian and lover of animal
            </h1>
          </p>
          <p className="	text-2xl text-white mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad
            rerum quo labore, aspernatur minima nihil eligendi debitis provident
            culpa dolore.
          </p>
          <button className="btn btn-outline bg-[#00BFCB] hover:bg-[#EAAE00] border-white text-white mx-4 px-8">
            Our Services
          </button>
        </div>
        <div className="h-96 w-96 overflow-hidden">
            <video src="src/asse"></video>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
