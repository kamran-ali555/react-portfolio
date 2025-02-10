import video1 from "../assets/video1.mp4";
import mypic from "../assets/profile-pictures/my-pic.png";
import mypic2 from "../assets/profile-pictures/kakakhail1.png";
const HeroSection = () => {
  return (
    <div className="flex flex-col">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10 md:justify-around items-center w-full ">
           <div className=" md:w-1/2 max-w-[500px] flex flex-col justify- items-center">
           <h3 className="text-left w-full pb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">HELLO!</h3>
           <h1 className="text-[35px] leading-[40px] text-center sm:w-full xs:border   sm:text-[40px] sm:leading-[50px]    md:text-[32px] md:leading-[40px] md:text-left lg:leading-[60px]  lg:text-[44px] tracking-wide">
             I'm Kamran Ali Expert <br /> 
             <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
               {" "}
               Front-End Web <br /> Developer
             </span>
           </h1>
           <p className="text-center text-neutral-500 mt-5  md:text-left md:mt-4 md:text-sm    lg:mt-7 lg:text-base ">
             Empower your creativity and bring your VR app ideas to life with our
             intuitive development tools. Get started today and turn your imagination
             into immersive reality!
           </p>
           <div className="w-full flex justify-center mt-9   md:justify-start md:mt-10   lg:mt-14 ">
             <a
               href="#"
               className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
             >
               HIRE ME
             </a>
             <a href="#" className="py-3 px-4 mx-3 rounded-md border">
               MY WORK
             </a>
           </div>
           </div>
            {/* first div */}
           <div className="">
           <img 
              className=" md:w-[350px] lg:w-full rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2"
              src={mypic2} 
            >
            </img>
           </div>
      </div>
    </div>
  );
};

export default HeroSection;