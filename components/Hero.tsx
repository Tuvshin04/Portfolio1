import Avatar from "./components/Avatar";
import Footer from "./components/Footer";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GlobeDemo } from "./components/Glob";
import AnimatedPinDemo from "./components/AnimatedPinDemo";
import AnimatedPinDemo2 from "./components/AnimatedPinDemo2";
import AnimatedPinDemo1 from "./components/AnimatedPinDemo1";
import SkillSVG from "./components/SkillSVG";

const Hero = () => {
  const words = "Hello i am Tuvshin";
  const words1 = "I'am Software Engineer ";
  const words2 =
    "  Hello, my name is Tuvshin, I am 18 years old, I graduated from the 38th German school in the summer of 2024. Then I start studying at Pinecone Academy for programming";
  return (
    <div className="pb-20 pt-8 h-fit container">
      <div className="w-full">
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
        </div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase tracking-widest text-3xl text-center text-blue-100 max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center">
            Modern Portfolio
          </h3>
        </div>
        <div className="">
          <div className="h-fit">
            <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
              <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="md:flex md:flex-row flex-col justify-between items-center gap-5 mt-[200px]">
              <div className="max-w-[89vw] md:max-w-20 lg:max-w[60vw] flex flex-col justify-center items-start ">
                <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center">
                  <TextGenerateEffect
                    duration={1}
                    filter={true}
                    words={words}
                    className="text-center text-[40px] sm:flex sm:justify-center  lg:w-[300px] md:w-[300px]"
                  />
                  <TextGenerateEffect
                    duration={1}
                    filter={true}
                    words={words1}
                    className="text-center text-[40px] lg:w-[300px] md:w-[300px]"
                  />
                </h1>
              </div>
              <div className="w-[600px] mt-[50px]">
                <GlobeDemo />
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center mt-[100px] ">
                <h3 className="text-2xl font-medium text-blue-100">About Me</h3>
              </div>
              <div className="mt-[90px] flex flex-col gap-5 sm:flex-row md:flex-row sm:justify-around justify-center items-center  ">
                <div>
                  <TextGenerateEffect
                    duration={1}
                    filter={true}
                    words={words2}
                    className=" font-light tracking-widest text-xl  text-white max-w-80 lg:max-w-[400px] lg:flex lg:justify-start lg:flex-col lg:items-center"
                  />
                </div>
                <div>
                  <Avatar />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-[200px]">
                <h3 className="text-2xl font-medium text-blue-100">Skills</h3>
              </div>
              <div className="mt-[150px]">
                <SkillSVG />
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-[200px]">
                <h3 className="text-2xl font-medium text-blue-100">Projects</h3>
              </div>
              <div className="grid grid-cols-1 md: sm:flex mt-[100px]">
                <AnimatedPinDemo />
                <AnimatedPinDemo1 />
                <AnimatedPinDemo2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
