import IMage from '../assets/images/servicesicon/mobile.svg';

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B]">
      {/* Main content container - set to full height and flex center */}
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 pt-20 md:pt-0 flex flex-col md:flex-row items-center md:items-center justify-between">
          
          {/* Text Content */}
          <div>
            <h2 className="text-special">
              EASIEST & TRUSTED
            </h2>
            <h1 className="text-normal">
              FINANCE MANAGER EVER
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
              Helping hand to manage your Money, Investments, and Spending 
              from one dashboard
            </p>
            <button className="button">
              GET STARTED
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 h-[400px] md:h-[500px] flex items-center justify-center">
            <img
              src={IMage}
              alt="Finance Mobile Preview"
              className="w-full h-auto max-h-full object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
