/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import imgTeam from '../../assets/images/teams/barcelona_03.png';
import { FaUpload } from "react-icons/fa";
import { ImProfile } from 'react-icons/im';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import StadiumCard from '../../components/generalCards/StadiumCard';
import { useNavigate } from 'react-router-dom';
import AddStadium from './AddStadium';
import { ScaleLoader } from 'react-spinners';
import { FetchData } from '../../hooks/FetchData';

const stadium=[
  {_id:'01',path:'/',text:'Heroes stadium'},
  {_id:'02',path:'/',text:'Nkoloma stadium'},
  {_id:'03',path:'/',text:'Levy Mwanawasa stadium'},
  {_id:'04',path:'/',text:'Chilata Nkana stadium'},
  {_id:'05',path:'/',text: 'Woodlands stadium'},
];

type fetchType={
  error:string,
  loading:boolean,
  userData:any
};

function TeamSettingSection() {
  const token:any= localStorage.getItem("token");
  // fetch data from Api
  const {error,loading,userData}:fetchType = FetchData('stadium/api/v1/get-all-stadiums',token);


  const [isDropDownStadium,setIsDropDownStadium] = useState<boolean>(false);
  const [isPressedAdd,setIsPressedAdd] = useState<boolean>(false);

  // toggle handler
  const toggleStadiumHandler=():void=>{
    setIsDropDownStadium(!isDropDownStadium);
  };


  return (
    <div id="team" className="pt-5">
      <div className="w-full pb-2 border-b-[1px] border-b-solid border-b-gray-400 flex gap-1 items-center">
        <div className="h-[35px] text-[20px] flex items-end w-full">
          Your Team Profile
        </div>
      </div>
      {/* content */}
      <div className="pt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* left */}
          <div className="">
            <div className="">
              <figure className="w-[80px] h-[80px] mx-auto relative ">
                <img src={imgTeam} className="w-full" />
                {/* upload */}
                <label
                  htmlFor="#logo"
                  className="w-[30px] absolute -bottom-3 -right-3 cursor-pointer h-[30px] rounded-full shadow-lg flex items-center justify-center bg-white"
                >
                  <span className="text-[14px] text-textDarkGreenColor">
                    <FaUpload />
                  </span>
                </label>
                <input
                  type="file"
                  value={""}
                  onChange={() => {
                    ("");
                  }}
                  name="logo"
                  id="#logo"
                  hidden
                />
              </figure>
            </div>
            {/* team description */}
          </div>
          {/* right */}
          <div className="b col-span-3">
            {/* row one */}
            <div className="flex flex-row gap-5 pt-2 mb-4">
              <div className="flex flex-col space-y-1 flex-[40%]">
                <label
                  className="text-[13px] text-textDarkGreenColor"
                  htmlFor="#teamName"
                >
                  Team Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="#teamName"
                  value={"BARCELONA FC"}
                  onChange={() => ""}
                  className="h-[35px] borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2"
                />
              </div>

              <div className="flex flex-col space-y-1 flex-[40%]">
                <label
                  className="text-[13px] text-textDarkGreenColor"
                  htmlFor="#category"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="#category"
                  value={"Super League"}
                  onChange={() => ""}
                  className="h-[35px] borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2 "
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1 flex-[40%] mb-4">
              <label
                className="text-[13px] text-textDarkGreenColor"
                htmlFor="#description"
              >
                Team description
              </label>
              <textarea
                rows={5}
                name="description"
                id="#description"
                value={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, "
                }
                onChange={() => ""}
                className=" borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center p-2"
              />
            </div>

            {/* stadiums */}
            <div className="py-1 relative border-solid border-orange-300 border-[1px] rounded-md">
              {/* header title */}
              {!isPressedAdd && (
                <div
                  onClick={toggleStadiumHandler}
                  className="h-[35px] cursor-pointer px-2 flex items-center justify-between w-full"
                >
                  <p className="text-[14px] text-textDarkGreenColor">
                    View Team stadiums
                  </p>
                  <span className="text-textDarkGreenColor text-[19px]">
                    {isDropDownStadium ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
              )}

              {/* header title 2 */}
              {isPressedAdd && (
                <div className="h-[35px] cursor-pointer px-2 flex items-center justify-between w-full">
                  <p className="text-[14px] text-textDarkGreenColor">
                    Add Stadium
                  </p>
                </div>
              )}

              {/* content of teams */}
              {isDropDownStadium && (
                <>
                  {/* loading indicator */}
                  {loading && (
                    <div className="flex items-center justify-center py-2 px-3">
                      <p className="text-[35px] w-full text-center pt-[100px]">
                        <ScaleLoader color="#FFA500" />
                      </p>
                    </div>
                  )}

                  {/* flag error message */}
                  {!loading && error && (
                    <div className="flex items-center justify-center py-2 px-3">
                      <p className="text-[15px] w-full text-center py-2">
                        {error}
                      </p>
                    </div>
                  )}

                  {/* loaded content */}
                  {!loading && !error && userData && (
                    <div className="">
                      {/* loading container */}

                      {!(userData?.data.length> 0) && (
                        <div className="text-center py-1 text-textDarkGreenColor text-opacity-50">
                          You have no stadium
                        </div>
                      )}

                      {/* stadiums list */}
                      {!isPressedAdd && (
                        <>
                          {userData?.data.map((val:any, index:number) => (
                            <StadiumCard
                              key={index}
                              data={val}
                              index={index}
                            />
                          ))}
                        </>
                      )}

                      {/* form for adding stadium */}
                      {isPressedAdd && (
                        <AddStadium callback={setIsPressedAdd} />
                      )}

                      {/* cancell icon */}
                      {isPressedAdd && (
                        <div
                          onClick={() => setIsPressedAdd(false)}
                          className="flex absolute -top-3 -right-1 transform  items-center justify-end px-3 mt-4"
                        >
                          <div className="w-[25px] h-[25px] z-20 cursor-pointer flex items-center justify-center bg-orange-500 text-white text-[25px] rounded-full shadow-lg">
                            <IoCloseSharp />
                          </div>
                        </div>
                      )}

                      {/* Add icon stadium */}
                      {!isPressedAdd && (
                        <div
                          onClick={() => setIsPressedAdd(true)}
                          className="flex items-center justify-end px-3 mt-4"
                        >
                          <div className="w-[35px] h-[35px] cursor-pointer flex items-center justify-center bg-orange-500 text-white text-[25px] rounded-full shadow-lg">
                            <IoAddSharp />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          {/* submit btn */}
          <div>
            <button
              type="submit"
              className="h-[35px] bg- bg-orange-400 px-2 rounded-sm text-[13px] text-white font-light"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSettingSection;