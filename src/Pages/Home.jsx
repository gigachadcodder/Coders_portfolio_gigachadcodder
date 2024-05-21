import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-row">
        <div className="flex flex-col gap-[2rem] justify-center items-start">
          <div className="flex flex-col text-white " >
            <div className="text-[18px]">Hi everyone, I am </div>
            <div className="text-[2rem]">Abhay Pratap Singh</div>
            <div className="text-[1rem] text-[#4D5BCE]">{`> Front-end developer`}</div>
          </div>
          <div>
            <div>// complete the game to continue</div>
            <div>// you can also see it on my Github page </div>
            <div>const githubLink = </div>
          </div>
        </div>
        <div className="w-[510px] h-[475px]">

        </div>
      </div>
    </div>
  );
};

export default Home;
