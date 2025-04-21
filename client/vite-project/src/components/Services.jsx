import React from "react";
import { FaShieldAlt, FaExchangeAlt, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaShieldAlt size={24} className="text-blue-400" />,
    title: "Security Guarantee",
    description: "Security is guaranteed. We always maintain privacy and the quality of our products.",
  },
  {
    icon: <FaExchangeAlt size={24} className="text-purple-400" />,
    title: "Best Exchange Rates",
    description: "Security is guaranteed. We always maintain privacy and the quality of our products.",
  },
  {
    icon: <FaRocket size={24} className="text-red-400" />,
    title: "Fastest Transactions",
    description: "Security is guaranteed. We always maintain privacy and the quality of our products.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-[#1c1c24] p-6 rounded-xl flex flex-col gap-4 hover:shadow-lg transition">
    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-black">
      {icon}
    </div>
    <h2 className="text-white text-lg font-semibold">{title}</h2>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 py-20 min-h-screen bg-gradient-to-r from-[#0f0e13] via-[#1c1c24] to-[#391d51]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Left Side */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-5xl text-white font-bold leading-tight mb-6">
            Services that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              we continue to improve
            </span>
          </h1>
          <p className="text-gray-400 text-base mt-4 md:w-3/4">
            The best choice for buying and selling your crypto assets, with various super friendly services we offer.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
