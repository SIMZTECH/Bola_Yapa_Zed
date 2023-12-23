/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext,useEffect } from 'react';
import user01 from '../../assets/images/user01.png'
import TagsProfile from '../../components/tags/TagsProfile';
import {BiMessageRoundedError } from "react-icons/bi";
import InputDisplay from '../../components/tags/inputDisplay';
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { TbGenderAndrogyne } from "react-icons/tb";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { IoFootballOutline } from "react-icons/io5";
import { MdOutlineStadium} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { GiLaurelsTrophy } from "react-icons/gi";
import { FetchData } from '../../hooks/FetchData';
import ScaleLoader  from 'react-spinners/ScaleLoader';
import WarningTagHandlers from '../../components/tags/WarningTagHandlers';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadCloudinary from '../../util/uploadCloudinary';
import { toast } from 'react-toastify';
import ClipLoader  from 'react-spinners/ClipLoader';
import HashLoader from 'react-spinners/HashLoader';
import { AUTH_BASE_URL } from '../../config';
import { authContext } from '../../contexts/AuthContext';

type propType={
  error:string,
  userData:any,
  loading:boolean
}

type uploadType={
  photo:string
}


function Profile() {
  const {dispatch}:any = useContext(authContext);

  const token:any = localStorage.getItem("token");
  const role:any = localStorage.getItem("role");

  const {error,userData,loading}:propType = FetchData("users/api/v1/get-user-profile",token);

  const [previewPhoto,setPreviewPhoto] = React.useState(user01);
  const [selectedPhoto,setSelectedPhoto] = React.useState('');
  const [uploadLoading,setUploadLoading] = React.useState<boolean>(false);
  const [submitLoading,setSubmitLoading] = React.useState<boolean>(false);
  const [formData,setFormData] = React.useState<uploadType>({
    photo:''
  });

  const onChangeInputHandler = async (e: any) => {
    const file: File = e.target.files[0];

    console.log(file);

    // cludinaryupload file
    setUploadLoading(true);
    await uploadCloudinary(file)
      .then((value) => {
        setUploadLoading(false);
        setFormData({
          photo: value.url,
        });

        setPreviewPhoto(value.url);
        setSelectedPhoto(value.url);
      })
      .catch((error: any) => toast.error(error.message));
  };

  const onSubmitHandler=async(e:any)=>{
    e.preventDefault();

    // update api request done here
    setSubmitLoading(true);
    try {
      const res = await fetch(`${AUTH_BASE_URL}/admin/api/v1/update-admin-profile`, {
        method: "put",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "Application/json",
        },
        body:JSON.stringify(formData)
      });
      const results = await res.json();
      if(!res.ok){
        throw new Error(results.message);
      }else{
        setSubmitLoading(false);
        toast.success(results.message);
        // update localstorage
        const {...rest} = results?.data;
         dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:{...rest},
            token,
            role
          }
        });

        // reload page
        setTimeout(() => {
          window.location.reload();
        },20);
      }
    } catch (error:any) {
      setSubmitLoading(false);
      toast.error(error.message);
    }
    
  };

  useEffect(()=>{

    if(userData?.data){
      // update local storage
      const {...rest} = userData?.data;
         dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:{...rest},
            token,
            role
          }
        });
    }

  },[dispatch, role, token, userData]);
  
  return (
    <section className="h-full relative">
      <div className="container ">
        {loading && (
          <div>
            <div>
              <p className="text-[35px] w-full text-center pt-[100px]">
                <ScaleLoader color="#FFA500" />
              </p>
            </div>
          </div>
        )}

        {error && (
          <div>
            <div>
              <p>{error}</p>
            </div>
          </div>
        )}

        {userData != null && !error && !loading && (
          <div>
            {/* top, header */}
            <div className="space-y-2 mb-5">
              <h3 className="text-[20px] pb-3 text-textDarkGreenColor font-medium">
                Your Profile
              </h3>
              {/* notice */}
              <div className="flex items-center gap-1 bg-lightOrangeColor px-2 py-3 rounded-md bg-opacity-30">
                <h3 className="b text-red-700 text-opacity-20 text-[25px] font-light">
                  <BiMessageRoundedError />
                </h3>
                <p className="text-[12px] text-textDarkGreenColor text-opacity-40">
                  This Account is being monitored by all staff members, no
                  changes will be made without approval!
                </p>
              </div>
            </div>
            {/* user profile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mb-10">
              {/* left user details */}
              <div className="">
                {/* left_user_ */}
                <div className="space-y-4 flex flex-col items-center">
                  {userData?.data?.photo && (
                    <figure className="h-[70px] w-[70px] bg-lightGreenColor rounded-full relative py-1 border-solid border-lightOrangeColor border-[2px]">
                      <img
                        src={userData?.data?.photo}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </figure>
                  )}
                  {!userData?.data?.photo && (
                    <form onSubmit={onSubmitHandler}>
                      <input
                        type="file"
                        onChange={onChangeInputHandler}
                        id="#upload"
                        name="upload"
                        accept=".png,.jpeg,.gif"
                        hidden
                      />
                      <figure className="h-[70px] w-[70px] bg-lightGreenColor rounded-full relative py-1 border-solid border-lightOrangeColor border-[2px]">
                        <img
                          src={previewPhoto}
                          className="w-full h-full object-cover rounded-full"
                        />
                        <label
                          htmlFor="#upload"
                          className="absolute cursor-pointer right-0 -bottom-[8px] w-[25px] h-[25px] bg-white rounded-full  shadow-md"
                        >
                          <div className="text-[17px] text-textDarkGreenColor flex items-center justify-center w-full h-full">
                            {uploadLoading ? (
                              <ClipLoader color="red" size={18} />
                            ) : (
                              <FaCloudUploadAlt />
                            )}
                          </div>
                        </label>
                        {/* <div className="absolute right-0 -bottom-[8px]">
                      <h1 className="text-[25px] text-blue-800">
                        <TbBadgeFilled />
                      </h1>
                    </div> */}
                      </figure>
                      {/* submit btn */}
                      <button type="submit" id="#submit" hidden></button>
                    </form>
                  )}

                  <div>
                    <h1 className="text-[18px] text-textDarkGreenColor font-medium">
                      {userData?.data?.name.toUpperCase()}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <TagsProfile value={"86"} text={"posts"} />
                    <TagsProfile value={"1.2k"} text={"updates"} />
                    <TagsProfile value={"5.5k"} text={"members"} />
                  </div>
                  <div className="w-full flex flex-col space-y-3 items-center">
                    {selectedPhoto && (
                      <>
                        <label
                          htmlFor="#submit"
                          className="w-[80%] h-[35px] flex items-center justify-center rounded-md bg-primaryOrangeColor cursor-pointer"
                        >
                          <h1 className="text-white text-[15px] font-light text-center">
                            {submitLoading ? (
                              <HashLoader color="red" size={18} />
                            ) : (
                              "upload your avator"
                            )}
                          </h1>
                        </label>
                        <button className="w-[80%] h-[35px] flex items-center justify-center rounded-md bg-black cursor-pointer">
                          <h1 className="text-white text-[15px] font-light">
                            remove your avator
                          </h1>
                        </button>
                      </>
                    )}
                    {/* conditioning */}
                    {!userData?.data?.photo && (
                      <WarningTagHandlers
                        text={"Your Profile has no photo "}
                        control={false}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* right_user infor */}
              <div className="b col-span-2 py-2 px-1 space-y-3">
                <InputDisplay
                  icon={<TfiEmail />}
                  value={`${userData?.data?.email}`}
                  text={"Your Email Address"}
                />

                <InputDisplay
                  icon={<IoMdCall />}
                  value={`${
                    userData?.data?.phone ? userData?.data?.phone : "Not Set"
                  }`}
                  text={"Phone number"}
                />

                <InputDisplay
                  icon={<TbGenderAndrogyne />}
                  value={`${userData?.data?.gender}`}
                  text={"Gender"}
                />

                <InputDisplay
                  icon={<BiSolidBadgeCheck />}
                  value={`${userData?.data?.approved}`}
                  text={"Account Status"}
                />

                <InputDisplay
                  icon={<RiAdminFill />}
                  value={`${userData?.data?.role}`}
                  text={"Your role"}
                />
              </div>
            </div>
            {/* horizontal line */}
            <div className="relative flex items-center h-[40px] w-full">
              <div className="w-full h-[1px] bg-textDarkGreenColor bg-opacity-40"></div>
              <h4
                className="text-[28px] text-lightPrimaryText border-solid border-textDarkGreenColor border-[0.5px] font-medium text-opacity-60 
              w-[35px] h-[35px] bg-white shadow-md
              absolute top-1/2 left-1/2 transform -translate-y-1/2  -translate-x-1/2  rounded-full flex items-center justify-center"
              >
                <IoFootballOutline />
              </h4>
            </div>
            {/* team profile */}
            <div>
              {!userData?.data?.team && (
                <div>
                  <h3 className="text-[17px] pb-3 text-textDarkGreenColor font-normal pt-3">
                      Your Current Team Details
                    </h3>
                  <div>
                    <WarningTagHandlers
                      text={"You have no team to show details"}
                      control={false}
                    />
                  </div>
                </div>
              )}
              {userData?.data?.team && (
                <>
                  <div>
                    <h3 className="text-[17px] pb-3 text-textDarkGreenColor font-normal pt-3">
                      Your Current Team Details
                    </h3>
                  </div>
                  {/* grid container */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mb-10">
                    {/* team stats */}
                    <div>
                      <div className="flex gap-5">
                        {/* image section */}
                        <div className="flex flex-col w-[20%] items-center">
                          <figure className="w-[40px]">
                            <img
                              src={userData?.data?.team?.logo}
                              className="w-full"
                            />
                          </figure>
                          <div className="w-full flex items-center justify-center">
                            <p className="text-[10px] text-center w-full">
                              {userData?.data?.team?.name}
                            </p>
                          </div>
                        </div>
                        {/* labels section */}
                        <div className="flex items-center justify-between flex-1">
                          <TagsProfile value={"3.5Bi"} text={"Net Worth"} />
                          <TagsProfile value={"3rd"} text={"Ranking"} />
                          <TagsProfile value={"400M"} text={"Total Fans"} />
                        </div>
                      </div>
                      <div className="b bg-lightGreenColor mt-3 bg-opacity-10 text-textDarkGreenColor text-opacity-50 w-full flex gap-2 h-[40px] justify-between items-center px-5 rounded-md">
                        <h3 className="text-[13px]">Team Status</h3>
                        <p className="text-[13px]">
                          {userData?.data?.team?.approved == "approved"
                            ? `Active`
                            : "Not Active"}
                        </p>
                      </div>
                      {/* team description */}
                      <div className="mt-4 space-y-2">
                        <h3 className="text-[13px] text-textDarkGreenColor">
                          Team Description
                        </h3>
                        <p className="text-[12px] text-textDarkGreenColor text-opacity-80 font-normal text-justify ">
                          {`${
                            userData?.data?.team?.description
                              ? userData?.data?.team?.description
                              : ""
                          }`}
                        </p>
                      </div>
                    </div>
                    {/* team details */}
                    <div className="b col-span-2 space-y-3">
                      {/* TODO:conditioning */}
                      {!userData?.data?.team?.coach && (
                        <WarningTagHandlers
                          text={"Team has no Coach"}
                          control={true}
                        />
                      )}
                      {userData?.data?.coach && (
                        <InputDisplay
                          icon={<FaUserDoctor />}
                          value={userData?.data?.coach?.name}
                          text={"Team Coach"}
                        />
                      )}
                      <InputDisplay
                        icon={<GiLaurelsTrophy />}
                        value={userData?.data?.team?.category}
                        text={"Team Category"}
                      />
                      <InputDisplay
                        icon={<BiSolidBadgeCheck />}
                        value={userData?.data?.team?.approved}
                        text={"Team Approval"}
                      />
                      <InputDisplay
                        icon={<MdOutlineStadium />}
                        value={"10"}
                        text={"Number of Stadiums"}
                      />
                      <InputDisplay
                        icon={<HiUserGroup />}
                        value={"400"}
                        text={"Total Number of fans"}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Profile