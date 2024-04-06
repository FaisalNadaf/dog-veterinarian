import React from "react";

const Footer = () => {
  return (
    <div className="h-[50%] bg-[#303130] flex justify-evenly text-white w-full py-24 px-0">
      <div className=" h-5/6 w-1/6  p-8">
        <p className="text-3xl font-bold mb-4">About</p>
        <ul className="font-medium text-xl	text-left">
          <li className="mb-2">History</li>
          <li className="mb-2">Our Team</li>
          <li className="mb-2">Brand Guidlines</li>
          <li className="mb-2">Terms & Condition</li>
          <li className="mb-2">Privacy Policy</li>
        </ul>
      </div>
      <div className=" h-5/6 w-1/6 p-8 ">
        <p className="text-3xl font-bold mb-4">Services</p>
        <ul className="font-medium text-xl	text-left">
          <li className="mb-2">How To Order</li>
          <li className="mb-2">Our Products</li>
          <li className="mb-2">BOrder Status</li>
          <li className="mb-2">Promo</li>
          <li className="mb-2">Payment Methord</li>
        </ul>
      </div>
      <div className=" w-1/4 text-right p-8">
        <p className="text-3xl font-bold mb-4">Titlt Here</p>
        <p className="font-medium text-xl mb-4">Lorem ipsum dolor sit amet </p>
        <div>
          <input type="text" className="bg-[#EAAE00] w-1/2 h-14 text-black" />
          <button className="bg-[#00BFCB] h-14 w-16">
            <i class="fa-regular fa-paper-plane"></i>
          </button>
        </div>
        <div className="flex flex-row-reverse">
          <div className="w-1/2 flex items-center justify-evenly my-6 ">
            <span>
              <i class="text-2xl text-black hover:bg-[#EAAE00] bg-white rounded-full h-8 w-8 flex items-center justify-center fa-brands fa-instagram "></i>
            </span>
            <span>
              <i class="text-2xl text-black hover:bg-[#EAAE00] bg-white rounded-full h-8 w-8 flex items-center justify-center fa-brands fa-square-facebook"></i>
            </span>
            <span>
              <i class="text-2xl text-black hover:bg-[#EAAE00] bg-white rounded-full h-8 w-8 flex items-center justify-center fa-brands fa-x-twitter"></i>
            </span>
            <span>
              <i class="text-2xl text-black hover:bg-[#EAAE00] bg-white rounded-full h-8 w-8 flex items-center justify-center fa-brands fa-whatsapp"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
