import React from 'react';
import userImg01 from '../../assets/images/user01.png';

function CoachSettingSection() {
  return (
    <div id="coach" className="pt-5">
      <div className="w-full pb-2 border-b-[1px] border-b-solid border-b-gray-400 flex gap-1 items-center">
        <div className="h-[35px] text-[20px] flex items-end w-full">
          Team Coach
        </div>
      </div>
      {/* content */}
      <div className="pt-5 ">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
            {/* left */}
            <div className="">
              <figure className="w-[80px] h-[80px] mx-auto relative">
                <img src={userImg01} />
              </figure>
              {/* name */}
              <div className="flex flex-col items-center space-y-1 leading-3 pt-5 pb-5 text-[14px] text-textDarkGreenColor">
                <h3>Mikel Arteta</h3>
                {/* role */}
                <p>Coach</p>
              </div>
            </div>
            {/* right */}
            <div className="b col-span-3">
              <div className="flex flex-col space-y-1">
                <label
                  className="text-[13px] text-textDarkGreenColor"
                  htmlFor="#status"
                >
                  Coach Status
                </label>
                <select
                  name="status"
                  id="#status"
                  onChange={()=>{''}}
                  className="h-[35px] cursor-pointer borer-solid border-orange-300 border-[1px] bg-transparent text-[13px] placeholder:text-[13px] focus:outline-none rounded-md items-center px-2"
                >
                  <option value={"pending"}>pending</option>
                  <option value={"approved"}>approved</option>
                  <option value={"decline"}>decline</option>
                </select>
              </div>
            </div>
          </div>

          {/* submit btn */}
          <div>
            <button className="h-[35px] bg- bg-orange-400 px-2 rounded-sm text-[13px] text-white font-light">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoachSettingSection