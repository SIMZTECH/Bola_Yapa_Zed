import React from 'react';
import { CgArrowRight } from "react-icons/cg";
import player_img from "../../assets/images/player_img02.png";
import other_player01 from "../../assets/images/pd20_img04.png";

function PlayerStats() {
  return (
    <div className=" bg-[#F5F5F5] h-full">
      <div className="rounded-md bg-lightOrangeColor p-2 pb-0">
        {/* header */}
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] text-textDarkGreenColor">
            GW 8's star player
          </h3>
          <div className="flex items-center gap-2 cursor-pointer text-textDarkGreenColor text-opacity-60">
            <h5 className="text-[13px]">Overall</h5>
            <span className="flex items-center justify-center ">
              <CgArrowRight />
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <figure className="w-[135px] h-[110px]">
            <img src={player_img} className="w-full h-full" />
          </figure>
          <div className="flex justify-center flex-col">
            <h5 className="text-[12px] text-textDarkGreenColor leading-5">
              Pierre Emerick
              <br />{" "}
              <span className="text-[15px] font-semibold">Aubameyang</span>{" "}
            </h5>
            <div className="flex gap-2 items-center mt-1">
              <h2 className="w-1 h-1 bg-textDarkGreenColor rounded-full"></h2>
              <p className="text-[10px] text-textDarkGreenColor">Barcelona</p>
            </div>
            <h1 className="text-[17px] font-semibold text-textDarkGreenColor mt-1">
              16 points
            </h1>
          </div>
        </div>
      </div>
      {/* players following */}
      <div>
        <div className="flex items-center justify-between px-3 mt-2 shadow-sm bg-white rounded-md py-1">
          <div className="leading-4">
            <h6 className="text-[12px] text-textDarkGreenColor text-opacity-60">
              Most transferred in
            </h6>
            <h1 className="text-[15px] font-medium text-textDarkGreenColor">
              Patson Daka
            </h1>
          </div>
          <figure className="w-[30px] h-[30px] rounded-full">
            <img
              src={other_player01}
              className="w-full object-cover rounded-full h-full"
            />
          </figure>
        </div>
        <div className="flex items-center justify-between px-3 mt-2 shadow-sm bg-white rounded-md py-1">
          <div className="leading-4">
            <h6 className="text-[12px] text-textDarkGreenColor text-opacity-60">
              Most Captained
            </h6>
            <h1 className="text-[15px] font-medium text-textDarkGreenColor">
              Enock Mwapu
            </h1>
          </div>
          <figure className="w-[30px] h-[30px] rounded-full">
            <img
              src={other_player01}
              className="w-full object-cover rounded-full h-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats