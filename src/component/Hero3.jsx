import React from "react";

const Hero3 = () => {
  return (
    <div className="h-screen  bg-[#FFC400] flex  justify-center flex-wrap">
      <div className="w-1/2 h-1/4  my-8 ">
        <p className="mb-8 text-center text-6xl font-bold text-black 	text-white">
          Work
        </p>
        <p className="	text-2xl text-white mb-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad rerum
          quo labore
        </p>
      </div>
      <div className="w-full h-4/6  flex justify-evenly items-center">
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog1.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10 rounded-lg"
          />
          <div className="">
            <p className="text-center mb-4 text-3xl font-bold text-white">
              veterinarian
            </p>
            <p className="text-center text-white font-medium	">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              excepturi corrupti autem iste!
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog2.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10  rounded-lg"
          />
          <div className="">
            <p className="text-center mb-4 text-3xl font-bold text-white">
              vaccination Care
            </p>
            <p className="text-center text-white font-medium	">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              excepturi corrupti autem iste!
            </p>
          </div>
        </div>
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog3.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10  rounded-lg"
          />
          <div className="">
            <p className="text-center mb-4 text-3xl font-bold text-white">
              Dental Care
            </p>
            <p className="text-center text-white font-medium	">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              excepturi corrupti autem iste!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
