import React from 'react';

import mainImage from '../assets/images/user.svg';
import IconSpeedometer from '../assets/images/speedometer.svg';
import IconBell from '../assets/images/bell.svg';
import IconBook from '../assets/images/book.svg';
import IconCreditCard from '../assets/images/creditcard.svg';
import IconTime from '../assets/images/time.svg';

const icons = [
    { src: IconTime, alt: 'Time Management', style: 'top-[-5px] right-[-5px]', size: 'w-40 h-40' },
  { src: IconSpeedometer, alt: 'Performance', style: 'top-35 right-[-140px] -translate-x-1/2', size: 'w-36 h-36' }, // Top center
  { src: IconCreditCard, alt: 'Payments', style: 'top-70 right-[-110px] -translate-x-1/2', size: 'w-32 h-32' },                // Bottom-right
  { src: IconBook, alt: 'Learning', style: 'bottom-[-30px] right-[5px] -translate-x-1/2', size: 'w-28 h-28' },     // Bottom center
  { src: IconBell, alt: 'Notifications', style: 'bottom-[-55px] right-[190px]', size: 'w-22 h-22' },                  // Bottom-left
];

const MoneyManager = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-white flex items-center justify-center px-6 md:px-20 py-10">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          ENJOY THE <span className="text-teal-400">SMARTER</span> WAY TO MANAGE MONEY
        </h1>
        <p className="text-base md:text-lg text-gray-200">
          From budgeting to investing—do it all in one place. <br />
          Join thousands of users making better financial decisions with ease.
        </p>
      </div>

      {/* Right Image + Icons */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative w-full max-w-[500px] h-auto md:h-[400]">
          {/* Main Image */}
          <img
            src={mainImage}
            alt="Dashboard"
            className="w-full h-auto rounded-md shadow-lg"
          />

          {/* U-Shaped Icons */}
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`absolute ${icon.style} ${icon.size}  flex items-center justify-center `}
            >
              <img src={icon.src} alt={icon.alt} className="w-2/3 h-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoneyManager;
