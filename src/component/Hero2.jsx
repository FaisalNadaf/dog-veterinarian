import React from "react";

const Hero2 = () => {
  return (
    <div className="h-screen  bg-white flex items-center justify-center">
      <div className=" flex justify-evenly	 w-full">
        <div className="h-96 w-1/2   ">
          <p className="mb-8">
            <h1 className="text-6xl font-bold text-black">
              As a veterinarian and lover of animal
            </h1>
          </p>
          <p className="	text-2xl text-black mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad
            rerum quo labore, aspernatur minima nihil eligendi debitis provident
            culpa dolore.
          </p>
          <button className="btn btn-outline bg-[#00BFCB] hover:bg-[#EAAE00] border-white text-black mx-4 px-8">
            Our Services
          </button>
        </div>
        <div className="h-96 w-96 overflow-hidden">
          <div className="h-full w-full  bg-[#FFC400] ">
            <video
              className="h-full object-cover z-10 opacity-60	"
              autoPlay
              loop
              src="src/assets/videos/dog1.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
