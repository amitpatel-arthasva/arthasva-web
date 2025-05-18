import LaptopDisplay from "../components/LaptopDisplay";

// Import all feature icons
import IconUser from "../assets/images/user-freindly.svg";
import IconSupport from "../assets/images/customer-support.svg";
import IconSecure from "../assets/images/security.svg";

// Features array
const features = [
  {
    icon: IconUser,
    title: 'User Friendly',
    description: 'Simple, clean, and easy to use – made for everyone, no finance background needed.',
  },
  {
    icon: IconSupport,
    title: 'Best Support',
    description: 'Quick, helpful support through chat, email, and FAQs—anytime you need it.',
  },
  {
    icon: IconSecure,
    title: 'Secure',
    description: 'Bank-level security with encryption and multi-factor login to keep your data safe.',
  },
];

const Manage = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-white flex items-center justify-center px-6 md:px-20 py-10">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Left: Laptop */}
        <div className="md:w-1/2 mt-6 md:mt-0 h-[400px] md:h-[500px] flex items-center justify-center">
          <LaptopDisplay />
        </div>

        {/* Right: Text and Features */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Manage Your Finance Effortlessly
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8">
            Take control of your money with one easy-to-use platform.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div >
                  <img src={feature.icon} alt={feature.title} className="w-20 h-20" />
                </div>
                <div>
                  <h3 className="text-xl text-[#6FFFE9] font-semibold">{feature.title}</h3>
                  <p className="text-gray-200 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Manage;
