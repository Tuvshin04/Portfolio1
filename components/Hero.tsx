import Menu from "./components/Menu";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const words = "Hello i am Tuvshin";
  const words1 = "I'am Software Engineer ";
  return (
    <div className="pb-20 pt-36">
      <div className="flex justify-end  items-center">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80  h-[80vh]
          w-[50vw]"
          fill="blue"
        />
        {/* <Menu /> */}
      </div>
      <div>
        <div className="h-screen">
          <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          <div className="max-w-[89vw] md:max-w-20 lg:max-w[60vw] flex flex-col justify-center items-start ">
            <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center">
              <TextGenerateEffect
                duration={1}
                filter={true}
                words={words}
                className="text-center text-[40px] lg:w-[300px] md:w-[300px]"
              />
              <TextGenerateEffect
                duration={1}
                filter={true}
                words={words1}
                className="text-center text-[40px] lg:w-[300px] md:w-[300px]"
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative my-20 z-10  "></div>
    </div>
  );
};
export default Hero;
