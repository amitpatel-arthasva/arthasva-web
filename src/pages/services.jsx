import React from 'react';

import IconPie from '../assets/images/servicesicon/piechart.svg';
import IconSpeedometer from '../assets/images/servicesicon/speedometer.svg';
import IconCreditCard from '../assets/images/servicesicon/creditcard.svg';
import IconBook from '../assets/images/servicesicon/book.svg';
import IconTarget from '../assets/images/servicesicon/target.svg';

const services = [
  {
    icon: IconPie,
    title: 'Mutual Funds & SIPs',
    desc: 'Compare funds with easy metrics, manage SIPs, and track performance',
  },
  {
    icon: IconSpeedometer,
    title: 'Financial Health Dashboard',
    desc: 'See your health score and track your net worth, savings, and investments',
  },
  {
    icon: IconCreditCard,
    title: 'Spend Tracking',
    desc: 'Sync accounts to categorize expenses and monitor monthly trends',
  },
  {
    icon: IconBook,
    title: 'Goal-Based Planning',
    desc: 'Create financial goals and monitor progress against your timeline',
  },
  {
    icon: IconTarget,
    title: 'Financial Education Hub',
    desc: 'Get bite-sized lessons on investment and finance topics',
  },
];

const OurServices = () => {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-white text-center">

      <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
      <p className="text-[#6FFFE9] mb-10">Everything you need to manage your money</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl p-6 bg-gradient-to-bl from-[#6FFFE9] via-[#5BC0BE] via-30% via-[#14265C] via-51% to-[#0B132B] via-31% shadow-lg text-left flex flex-col gap-4 min-h-[180px]"
          >
            <img src={service.icon} alt={service.title} className="w-10 h-10" />
            <h3 className="text-[#6FFFE9] font-semibold text-lg">{service.title}</h3>
            <p className="text-white text-sm">{service.desc}</p>
          </div>
        ))}
        <div className="flex items-center justify-center">
          <button className="px-6 py-2 bg-[#6FFFE9] text-[#0B132B] font-semibold rounded-full hover:bg-[#5BC0BE] transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
