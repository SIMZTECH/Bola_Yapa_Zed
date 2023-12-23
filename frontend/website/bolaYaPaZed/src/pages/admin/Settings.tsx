import React, { useState } from 'react';
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { SiAlwaysdata } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";
import TeamSettingSection from './TeamSettingSection';
import CoachSettingSection from './CoachSettingSection';
import { Link } from 'react-router-dom';
import DangerZoneSection from './DangerZoneSection';

function Settings() {
  const [isDropDownAccess,setIsDropDownAccess] = useState<boolean>(false);
  const [isDropDownConfig,setIsDropDownConfig] = useState<boolean>(false);

  const toggleAccessHandler=()=>{
    setIsDropDownAccess(!isDropDownAccess);
  };

  const toggleConfigHandler=()=>{
    setIsDropDownConfig(!isDropDownConfig);
  };




  return (
    <section className="relative h-full">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3">
            {/* left */}
            <div>
              {/* top header */}
              <div className="w-full pb-2 border-b-[1px] border-b-solid border-b-gray-400 flex gap-1 items-center">
                <div className="h-[30px] w-[5px] bg-orange-300 rounded-md"></div>
                <div className="h-[35px] flex-1 bg-lightGreenColor hover:bg-lightOrangeColor hover:bg-opacity-30 rounded-md flex cursor-pointer items-center px-3 bg-opacity-30 space-x-1">
                  <span className="h-full flex items-center justify-center text-[25px]">
                    <CiSettings />
                  </span>
                  <h3 className="text-[16px]">General</h3>
                </div>
              </div>
              {/* navigations */}
              <nav>
                {/* access */}
                <div>
                  <h4 className="b mb-2 pt-2 text-textDarkGreenColor">
                    Access
                  </h4>
                  <button
                    onClick={toggleAccessHandler}
                    className="h-[35px] px-2 flex items-center justify-between w-full hover:bg-lightOrangeColor hover:bg-opacity-30 hover:rounded-md"
                  >
                    <div className="flex items-center justify-center space-x-1">
                      <span className="b text-textDarkGreenColor text-opacity-40 text-[18px]">
                        <ImProfile />
                      </span>
                      <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                        Profile
                      </p>
                    </div>
                    <span className="text-textDarkGreenColor text-[19px] text-opacity-40">
                      {isDropDownAccess ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </button>
                  {isDropDownAccess && (
                    <ul className="b leading-5 pt-1 ">
                      <a href='#team' className="b text-[13px] flex items-center text-textDarkGreenColor text-opacity-40 cursor-pointer px-7 h-[30px] hover:bg-aghtOrangeColor hover:bg-opacity-30 hover:rounded-md">
                        Team
                      </a>
                      <a href='#coach' className="b text-[13px] flex items-center text-textDarkGreenColor text-opacity-40 cursor-pointer px-7 h-[30px] hover:bg-lightOrangeColor hover:bg-opacity-30 hover:rounded-md">
                        Coach
                      </a>
                    </ul>
                  )}
                  {/* usage and documentation */}
                  <div className="h-[35px] cursor-pointer px-2 flex items-center space-x-1 w-full hover:bg-lightOrangeColor hover:bg-opacity-30 hover:rounded-md">
                    <span className="b text-textDarkGreenColor text-opacity-40 text-[18px]">
                      <SiAlwaysdata />
                    </span>
                    <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                      Usage
                    </p>
                  </div>
                </div>
                {/* configuration */}
                <div>
                  <h4 className="b mb-2 pt-2 text-textDarkGreenColor">
                    Configuration
                  </h4>
                  <button
                    onClick={toggleConfigHandler}
                    className="h-[35px] px-2 flex items-center justify-between w-full hover:bg-lightOrangeColor hover:bg-opacity-30 hover:rounded-md"
                  >
                    <div className="flex items-center justify-center space-x-1">
                      <span className="b text-textDarkGreenColor text-opacity-40 text-[18px]">
                        <GrSystem />
                      </span>
                      <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                        System
                      </p>
                    </div>
                    <span className="text-textDarkGreenColor text-[19px] text-opacity-40">
                      {isDropDownConfig ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                  </button>
                  {isDropDownConfig && (
                    <div className="mt-2">
                      {/* mode */}
                      <div className="h-[35px] flex items-center justify-between px-2 pl-7">
                        <div className="flex items-center justify-center space-x-1">
                          <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                            Change mode
                          </p>
                        </div>
                        <button className="h-[17px] rounded-full w-[35px] relative border-solid px-[1px] border-[1px] border-textDarkGreenColor bg-lightGreenColor bg-opacity-30">
                          <p className="h-[15px] w-[15px] bg-orange-400 bg-opacity-70 rounded-full"></p>
                        </button>
                      </div>
                      {/* notifications */}
                      <div className="h-[35px] flex items-center justify-between px-2">
                        <div className="flex items-center justify-center space-x-1 pl-5">
                          <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                            Notifications
                          </p>
                        </div>
                        <button className="h-[17px] rounded-full w-[35px] relative border-solid px-[1px] border-[1px] border-textDarkGreenColor bg-lightGreenColor bg-opacity-30">
                          <p className="h-[15px] w-[15px] bg-orange-400 bg-opacity-70 rounded-full"></p>
                        </button>
                      </div>

                      {/* cookies */}
                      <div className="h-[35px] flex items-center justify-between px-2">
                        <div className="flex items-center justify-center space-x-1 pl-5">
                          <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                            Cookies
                          </p>
                        </div>
                        <button className="h-[17px] rounded-full w-[35px] relative border-solid px-[1px] border-[1px] border-textDarkGreenColor bg-lightGreenColor bg-opacity-30">
                          <p className="h-[15px] w-[15px] bg-orange-400 bg-opacity-70 rounded-full"></p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {/* danger zone */}
                <div>
                  <h4 className="b mb-2 pt-2 text-textDarkGreenColor">
                    Privacy
                  </h4>
                  <div className="h-[35px] cursor-pointer px-2 flex items-center space-x-1 w-full hover:bg-lightOrangeColor hover:bg-opacity-30 hover:rounded-md">
                    <span className="b text-textDarkGreenColor text-opacity-40 text-[18px]">
                      <MdManageAccounts />
                    </span>
                    <p className="text-[14px] text-textDarkGreenColor text-opacity-40">
                      Delete Account
                    </p>
                  </div>
                </div>
              </nav>
            </div>
            {/* right */}
            <div className="b col-span-3">
              {/* header */}
              <div className="w-full pb-2 border-b-[1px] border-b-solid border-b-gray-400 flex gap-1 items-center">
                <div className="h-[35px] text-[20px] flex items-end w-full">
                  General
                </div>
              </div>
              <div className="mt-2">
                {/* form */}
                <form>
                  {/* email address */}
                  <div className="mb-3">
                    <div className="flex flex-col space-y-1 mb-2">
                      <label
                        className="text-[13px] text-textDarkGreenColor"
                        htmlFor="#email"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="#email"
                        value={"Calrodgerscal@gmmail.com"}
                        onChange={() => ""}
                        className="h-[35px] borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2 w-[40%]"
                      />
                    </div>
                    {/* note */}
                    <p className="text-[13px] text-textDarkGreenColor">
                      Changing your email address also changes your login
                      credentials{" "}
                      <span className="b underline text-[14px] text-textDarkGreenColor cursor-pointer font-medium">
                        Learn more
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col space-y-1 mb-2">
                    <label
                      className="text-[13px] text-textDarkGreenColor"
                      htmlFor="#username"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="#username"
                      value={"RODGERS SIMPEMBA"}
                      onChange={() => ""}
                      className="h-[35px] borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2 w-[40%]"
                    />
                  </div>
                  {/* password */}
                  <div className="flex flex-row gap-2 pt-2 mb-4">
                    <div className="flex flex-col space-y-1 flex-[40%]">
                      <label
                        className="text-[13px] text-textDarkGreenColor"
                        htmlFor="#newPassword"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        name="newPassword"
                        id="#newPassword"
                        value={"RODGERS SIMPEMBA"}
                        onChange={() => ""}
                        className="h-[35px] w-3/4 borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2"
                      />
                    </div>
                    <div className="flex flex-col space-y-1 flex-[40%]">
                      <label
                        className="text-[13px] text-textDarkGreenColor"
                        htmlFor="#currentPassword"
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        id="#currentPassword"
                        value={"RODGERS SIMPEMBA"}
                        onChange={() => ""}
                        className="h-[35px] borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2 w-3/4"
                      />
                    </div>
                  </div>
                  <p className="b text-[14px] mb-3 text-textDarkGreenColor">
                    Can't remember your current password?{" "}
                    <span className="b font-medium underline cursor-pointer">
                      Reset your password
                    </span>
                  </p>
                  {/* save changes btn */}
                  <div>
                    <button className="h-[35px] bg- bg-orange-400 px-2 rounded-sm text-[13px] text-white font-light">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              {/* team section */}
              <TeamSettingSection />

              {/* coach section */}
              <CoachSettingSection />

              {/* danger zone */}
              <DangerZoneSection />


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings