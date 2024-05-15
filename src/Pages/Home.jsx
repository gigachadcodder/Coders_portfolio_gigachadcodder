import React from "react";
import backgroundBlur from "../assets/backgrounds/BackgroundBlurs.png";

const Home = () => {
  return (
    <div className="flex h-[36rem] lg:h-[30rem] w-full items-center justify-center">
      <div className="flex flex-row ">
        <div className="flex flex-col gap-[2rem] justify-center items-start px-[2rem] bg-heroBlur bg-cover bg-center
        h-screen ">
          <div className="flex flex-col text-white ">
            <div className="text-[18px]">Hi everyone, I am </div>
            <div className="text-[2rem]">Abhay Pratap Singh</div>
            <div className="text-[1rem] mt-3 lg:mt-0 text-[#4D5BCE]">{`> Front-end developer`}</div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="hidden lg:flex xl:flex">
              // complete the game to continue
            </div>
            <div className="hidden lg:flex xl:flex">
              // you can also see it on my Github page{" "}
            </div>
            <div className="flex lg:hidden xl:hidden " >
              // find my profile on Github:
            </div>
            <div className="text-green-400 lg:mt-0">
              const githubLink ={" "}
              <a href="https://github.com/gigachadcodder" class="text-red-300 underline">
              https://github.com/gigachadcodder
              </a>
            </div>
          </div>
        </div>
        <div className="w-[510px] h-[475px] hidden lg:flex xl:flex"></div>
      </div>
    </div>
  );
};

export default Home;
