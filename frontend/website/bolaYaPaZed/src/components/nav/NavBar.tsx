/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSettings } from "react-icons/ci";
import profile_img01 from '../../assets/images/user02.png';
import { FiLogOut } from "react-icons/fi";
import {navItemsType,adminNav} from '../../assets/data/Navigation';
import NavList from './NavList';
import { Link,useNavigate } from 'react-router-dom';
import { IoAddSharp } from "react-icons/io5";
import React from "react";
import { authContext } from "../../contexts/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const {role,user,dispatch}:any = React.useContext(authContext);

  const logoutHandler=()=>{
    dispatch({
      type:"LOGOUT",
      payload:{
        user:null,
        token:null,
        role:null
      }
    });
  };

  return (
    <nav className=" bg-lightOrangeColor h-full border-r-1 shadow-navPanel">
      {user !== null && (
        <div className="">
          <div className="flex justify-end">
            <Link
              to={"my-account/settings"}
              className="text-[23px] p-1 cursor-pointer text-textDarkGreenColor text-opacity-70"
            >
              <CiSettings />
            </Link>
          </div>
          <div className="flex items-center justify-center flex-col gap-1">
            <Link to={"profile/me"}>
              <figure className="w-[65px] h-[65px] rounded-full cursor-pointer">
                {user?.photo && (
                  <img src={user?.photo} className="w-full h-full rounded-full" />
                )}
                {!user?.photo && (
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <p className="b text-center leading-4 text-textDarkGreenColor text-opacity-60 text-[12px]">
                      Update <br />
                      Profile
                    </p>
                  </div>
                )}
              </figure>
            </Link>
            <div className="w-full flex flex-col items-center">
              <div className=" leading-5 mb-2 text-center mt-2">
                <h3 className="text-[17px] text-lightPrimaryText font-medium">
                  {user?.name}
                </h3>
                <p className="text-[14px] text-lightPrimaryText font-normal">
                  {role}
                </p>
              </div>
              {/* check if team exists */}
              {user?.team ? (
                <div className="flex flex-col items-center">
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img src={user.team?.logo} className="w-full h-full rounded-full"/>
                  </figure>
                  <p className="text-[10px] text-textDarkGreenColor">{user.team?.name.toLowerCase()}</p>
                </div>
              ) : (
                <button
                  onClick={() => navigate("add/team")}
                  className="bg-red-500 h-[40px] px-4 rounded-md text-white text-[11px] cursor-pointer relative"
                >
                  <p>You have no team to manage</p>
                  <div className="absolute text-red-500 -top-2 -right-1 bg-white rounded-full p-1 text-[14px]">
                    <IoAddSharp />
                  </div>
                </button>
              )}

              {user?.team && (
                <div className="w-full flex items-center justify-between mt-3 px-2">
                  <div className="flex flex-col items-center leading-5">
                    <h1 className="text-[18px] text-lightPrimaryText font-normal">
                      18
                    </h1>
                    <p className="text-[13px] text-textDarkGreenColor text-opacity-60">
                      Total Points
                    </p>
                  </div>
                  <div className="flex flex-col items-center leading-5">
                    <h1 className="text-[18px] text-lightPrimaryText font-normal">
                      123.88
                    </h1>
                    <p className="text-[13px] text-textDarkGreenColor text-opacity-60">
                      Overall Ranking
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {user?.team && (
            <ul className="pt-5">
              {adminNav.map((item: navItemsType, index: number) => (
                <li key={index}>
                  <NavList data={item} />
                </li>
              ))}
            </ul>
          )}
          {/* logout button */}
          <button
            onClick={logoutHandler}
            className="flex gap-3 items-center pl-5 mt-4 cursor-pointer"
          >
            <span className="text-[20px] text-textDarkGreenColor">
              <FiLogOut />
            </span>
            <h3 className="text-[14px] text-textDarkGreenColor">Logout</h3>
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar