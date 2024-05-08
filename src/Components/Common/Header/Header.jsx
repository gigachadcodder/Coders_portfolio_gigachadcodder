import { Tabs } from "antd";
import React, { useState } from "react";

const Header = () => {
  const [tabSelected, setTabSelected] = useState(false);
  const clickHandler = () => {
    setTabIsOpen(true);
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-10 m-0 flex flex-row 
      justify-between p-6  items-center 

       ">
        <SingleTab title={"Abhay-Pratap-Singh"} />
          <div className="flex flex-row gap-3">
          <SingleTab title={"_home"} />
          <SingleTab title={"_about-me"} />
          <SingleTab title={"_projects"} />
          </div>
        <SingleTab title={"_contact-me"} />
      </div>
    </>
  );
};

const SingleTab = ({ title }) => <div>{title}</div>;

export default Header;
