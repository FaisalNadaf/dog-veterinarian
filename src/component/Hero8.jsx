import React from "react";

const Hero8 = () => {
  return (
    <div className="h-screen  bg-white flex  justify-center flex-wrap">
      <div className="w-1/2 h-1/4  my-8 	  ">
        <p className="mb-8 text-center text-6xl font-bold text-black 	text-black">
          Recent Posts
        </p>
        <p className="	text-2xl text-black mb-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, ad rerum
          quo labore
        </p>
      </div>
      <div className="w-full h-4/6  flex justify-evenly ">
        <div className="w-1/6 h-full shadow	h-[90%]	rounded-lg shadow-black ">
          <img
            src="src/assets/images/doctor1.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-4 rounded-lg"
          />
          <div className="mx-4">
            <p className="text-black text-xl font-bold">
              As a veternary and lover of animal
            </p>
            <p className="text-[#84C7FF] font-semibold	mb-4">febuary 9 2020</p>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-[#84C7FF] font-black mt-4">Read More+</p>
          </div>
        </div>
        <div className="w-1/6 h-full shadow	h-[90%]	rounded-lg shadow-black ">
          <img
            src="src/assets/images/doctor2.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-4  rounded-lg"
          />
          <div className="mx-4">
            <p className="text-black text-xl font-bold">
              As a veternary and lover of animal
            </p>
            <p className="text-[#84C7FF] font-semibold	mb-4">febuary 9 2020</p>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-[#84C7FF] font-black mt-4">Read More+</p>
          </div>
        </div>
        <div className="w-1/6 h-full shadow	h-[90%]	rounded-lg shadow-black ">
          <img
            src="src/assets/images/doctor3.jpg"
            alt=""
            className="h-1/2  w-full object-cover mb-4  rounded-lg"
          />
          <div className="mx-4">
            <p className="text-black text-xl font-bold">
              As a veternary and lover of animal
            </p>
            <p className="text-[#84C7FF] font-semibold	mb-4">febuary 9 2020</p>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-[#84C7FF] font-black mt-4">Read More+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero8;
