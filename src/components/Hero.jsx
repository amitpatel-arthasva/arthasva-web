import React from 'react';
import LaptopDisplay from './LaptopDisplay';
import Logo from '../assets/images/Logo.png';

const Hero = () => {
  return (
    <div 
    >
      {/* Logo at the top left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-30">
        <img src={Logo} alt="Company Logo" className="h-15 md:h-20" />
      </div>
      
      {/* Main content container - set to full height and flex center */}
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 pt-20 md:pt-0 flex flex-col md:flex-row items-center md:items-center justify-between">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 z-10 font-[MuktaVaani]">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6FFFE9] mb-2">
              EASIEST & TRUSTED
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              FINANCE MANAGER EVER
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
              Helping hand to manage your Money, Investments, and Spending 
              from one dashboard
            </p>
            <button className="bg-[#6FFFE9] hover:bg-teal-500 text-gray-900 font-semibold text-xl md:text-2xl py-3 px-8 rounded-full transition duration-300">
              COMING SOON
            </button>
          </div>
          
          <div className="md:w-1/2 mt-6 md:mt-0 h-[400px] md:h-[500px] flex items-center justify-center">
            <LaptopDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;