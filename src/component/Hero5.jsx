import React from "react";

const Hero5 = () => {
  return (
    <div className="h-screen  bg-[#FFC400] flex  justify-center flex-wrap">
      <div className="w-1/2 h-1/4  my-8 ">
        <p className="mb-8 text-center text-6xl font-bold text-black 	text-white">
          Buy
        </p>
        <p className="	text-2xl text-white mb-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad rerum
          quo labore
        </p>
      </div>
      <div className="w-full h-4/6  flex justify-evenly items-center">
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog4.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10 rounded-lg"
          />
          <div className="">
            <div className="text-center ">
              <span className="text-center mx-2 text-3xl font-bold text-white line-through	decoration-4">
                &nbsp;$50&nbsp;
              </span>
              <span className="text-center mx-2 text-3xl font-bold text-white">
                $30
              </span>
            </div>
            <div className="flex items-center justify-center my-6">
              <button className="rounded-full btn btn-outline hover:bg-[#EAAE00] bg-[#00BFCB] border-white text-black  px-8 ">
                Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog5.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10  rounded-lg"
          />
          <div className="">
            <div className="text-center ">
              <span className="text-center mx-2 text-3xl font-bold text-white line-through	decoration-4">
                &nbsp;$130&nbsp;
              </span>
              <span className="text-center mx-2 text-3xl font-bold text-white">
                $85
              </span>
            </div>
            <div className="flex items-center justify-center my-6">
              <button className="rounded-full btn btn-outline hover:bg-[#EAAE00] bg-[#00BFCB] border-white text-black  px-8 ">
                Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/5 h-full  ">
          <img
            src="src/assets/images/dog6.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-10  rounded-lg"
          />
          <div className="">
            <div className="text-center ">
              <span className="text-center mx-2 text-3xl font-bold text-white line-through	decoration-4">
                &nbsp;$80&nbsp;
              </span>
              <span className="text-center mx-2 text-3xl font-bold text-white">
                $45
              </span>
            </div>
            <div className="flex items-center justify-center my-6">
              <button className="rounded-full btn btn-outline hover:bg-[#EAAE00] bg-[#00BFCB] border-white text-black  px-8 ">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
