import React from 'react';
import user01 from '../../assets/images/user01.png'
import TagsProfile from '../../components/tags/TagsProfile';
import { BiBadge, BiMessageRoundedError } from "react-icons/bi";
import InputDisplay from '../../components/tags/inputDisplay';
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { TbGenderAndrogyne } from "react-icons/tb";
import { GrFormCheckmark, GrUserAdmin } from "react-icons/gr";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TbBadgeFilled } from "react-icons/tb";

function Profile() {
  return (
    <section className="h-full relative">
      <div className="container bg-white ">
        <div>
          {/* top, header */}
          <div className="space-y-2">
            <h3 className='text-[20px] pb-3 text-textDarkGreenColor font-medium'>Your Profile</h3>
            {/* notice */}
            <div className="flex items-center gap-1 bg-lightOrangeColor px-2 py-3 rounded-md bg-opacity-30">
              <h3 className="b text-red-700 text-opacity-20 text-[25px] font-light">
                <BiMessageRoundedError />
              </h3>
              <p className="text-[12px] text-textDarkGreenColor text-opacity-40">
                This Account is being monitored by all staff members, no changes
                will be made without approval!
              </p>
            </div>
          </div>
          {/* bottom grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {/* left user details */}
            <div className="">
              {/* left_user_ */}
                <div className="space-y-4 flex flex-col items-center">
                  <figure className="h-[70px] w-[70px] rounded-full relative">
                    <img
                      src={user01}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className='absolute right-0 -bottom-[8px]'>
                      <h1 className='text-[25px] text-blue-800'><TbBadgeFilled /></h1>
                    </div>
                  </figure>
                  <div>
                    <h1 className="text-[18px] text-textDarkGreenColor font-medium">
                      Danniel Smith
                    </h1>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <TagsProfile value={"86"} text={"posts"} />
                    <TagsProfile value={"1.2k"} text={"updates"} />
                    <TagsProfile value={"5.5k"} text={"members"} />
                  </div>
                  <div className="w-full flex flex-col space-y-3 items-center">
                    <button className="w-[80%] h-[35px] flex items-center justify-center rounded-md bg-primaryOrangeColor cursor-pointer">
                      <h1 className="text-white text-[15px] font-light">
                        upload your avator
                      </h1>
                    </button>
                    <button className="w-[80%] h-[35px] flex items-center justify-center rounded-md bg-black cursor-pointer">
                      <h1 className="text-white text-[15px] font-light">
                        remove your avator
                      </h1>
                    </button>
                  </div>
                </div>
            </div>

            {/* right_user infor */}
            <div className="b col-span-2 py-2 px-1 space-y-3">
                <InputDisplay
                  icon={<TfiEmail />}
                  value={"calrogerscal@gmail.com"}
                  text={"Your Email Address"}
                />

                <InputDisplay
                  icon={<IoMdCall />}
                  value={"+260 969 718 806"}
                  text={"Phone number"}
                />

                <InputDisplay
                  icon={<TbGenderAndrogyne />}
                  value={"Male"}
                  text={"Gender"}
                />

                <InputDisplay
                  icon={<BiSolidBadgeCheck  />}
                  value={"Pending"}
                  text={"Account Status"}
                />

                <InputDisplay
                  icon={<RiAdminFill />}
                  value={"Admin"}
                  text={"Your role"}
                />
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile