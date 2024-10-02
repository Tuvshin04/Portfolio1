import Avatar from "./components/Avatar";
import Menu from "./components/Menu";
import { Spotlight } from "./ui/Spotlight";
const Hero = () => {
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

        <Menu />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};
export default Hero;
