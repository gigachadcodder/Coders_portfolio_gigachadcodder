import { Tabs } from "antd";
import Title from "antd/es/skeleton/Title";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { ImTerminal } from "react-icons/im";


const Header = () => {
  const [tabSelected, setTabSelected] = useState(false);
  const clickHandler = () => {
    setTabIsOpen(true);
  };

  const [isNavbarOpen, setNavbarOpen ] = useState(false);
  const navbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
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
        className="sticky w-full overflow-hidden h-[4rem] lg:[3rem] items-center flex flex-row justify-between border bg-Background
        border-NavBarBorder top-0 left-0 ">
        <div className="flex justify-center items-center px-3 lg:px-[1rem] font-bold text-[1.3rem] lg:text-[1rem]" onClick={()=>navigate('/')}> Abhay-Pratap-Singh</div>
        <div className="flex flex-row ">
          {Tabs.map((items) => (
            <SingleTab key={items.name} title={items.title} action={()=>navigate(items.path)} />
          ))}
        </div>
        <div className="hidden lg:flex lg:px-[1rem]"
        onClick={()=>navigate('/contact-me')}>_contact-me</div>
        <div className="lg:hidden px-[1rem] flex justify-center items-center">
        <ImTerminal size={'20px'} onClick={navbarToggle}/>
        </div>
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
  <div className="hidden lg:flex md:flex border border-NavBarBorder lg:p-2.5"
  onClick={action} >{title} </div>
);

export default Header;
