import laptopImage from '../assets/images/Mock_laptop.png';
import ellipseLarge from '../assets/images/Ellipse_large.png';
import ellipseSmall from '../assets/images/Ellipse_small.png';

const LaptopDisplay = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
      {/* Background Ellipses */}
      <div className="absolute w-full h-full flex justify-center items-center z-10">
        <img 
          src={ellipseLarge} 
          alt="Background Circle" 
          className="absolute max-w-[85%] max-h-[85%] object-contain z-10"
        />
        <img 
          src={ellipseSmall} 
          alt="Small Background Circle" 
          className="absolute max-w-[40%] max-h-[40%] left-[0%] md:left-[15%] bottom-[10%] object-contain z-10"
        />
      </div>
      
      <div className="relative z-20 left-[7.5%] max-w-[80%] md:max-w-[70%] flex justify-center">
        <img 
          src={laptopImage} 
          alt="Analytics Dashboard" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LaptopDisplay;