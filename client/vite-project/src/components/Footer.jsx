import React from "react";
import logo3 from "../../images/logo3.png";

const Footer = () => (
  <div className="w-full flex flex-col items-center p-6 bg-gradient-to-r from-indigo-900 to-black">
    
    <div className="w-full flex flex-col sm:flex-row justify-between items-center my-6">
      
      {/* Logo */}
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo3} alt="BlockPay Logo" className="w-100 h-40 object-contain" />
      </div>

      {/* Links */}
      <div className="flex flex-1 justify-evenly items-center flex-wrap mt-5 sm:mt-0 w-full">
        <p className="text-white text-base text-center mx-3 cursor-pointer hover:underline">Market</p>
        <p className="text-white text-base text-center mx-3 cursor-pointer hover:underline">Exchange</p>
        <p className="text-white text-base text-center mx-3 cursor-pointer hover:underline">Tutorials</p>
        <p className="text-white text-base text-center mx-3 cursor-pointer hover:underline">Wallets</p>
      </div>

    </div>

    {/* Invitation */}
    <div className="flex flex-col justify-center items-center mt-6 text-center">
      <p className="text-white text-sm">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm font-medium mt-2">info@example.com</p>
    </div>

    {/* Divider */}
    <div className="w-[90%] h-px bg-gray-500 my-6" />

    {/* Bottom note */}
    <div className="w-[90%] flex justify-between items-center text-gray-400 text-xs">
      <p>© ExampleCompany 2025</p>
      <p>All rights reserved</p>
    </div>

  </div>
);

export default Footer;
