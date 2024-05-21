import { Tabs } from "antd";
import Title from "antd/es/skeleton/Title";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const Header = () => {
  const [tabSelected, setTabSelected] = useState(false);
  const clickHandler = () => {
    setTabIsOpen(true);
  };

const navigate = useNavigate()

  const Tabs = [
    {
      name: "home",
      title: "_home",
      path: "/",
    },
    {
      name: "AboutMe",
      title: "_about-me",
      path: "/About-me",
    },
    {
      name: "Projects",
      title: "_projects",
      path: "/projects",
    },
  ];
   

  return (
    <>
      <div
        className="sticky top-0 left-0 w-screen h-10 m-0 flex flex-row 
      justify-between p-6  items-center border border-NavBarBorder
       ">
        <SingleTab action={()=>navigate('/')} title={"Abhay-Pratap-Singh"} />
        <div className="flex">
          {Tabs.map((items) => (
            <SingleTab key={items.name} title={items.title} action={()=>navigate(items.path)} />
          ))}
        </div>
        <SingleTab action={()=>navigate("/contact-me")} title={"_contact-me"} />
      </div>
      {isNavbarOpen && (<div className="absolute z-100 w-full h-[10rem] top-0 left-0 mt-16 bg-NavBarBorder ">
        <div className="flex flex-col border border-NavBarBorder px-[1rem] py-[2rem] ">

        </div>
      </div>
    )}
    </>
  );
};

const SingleTab = ({ title, action }) => (
  <div onClick={action} className="border border-NavBarBorder p-3 hover:text-white">{title} </div>
);

export default Header;
