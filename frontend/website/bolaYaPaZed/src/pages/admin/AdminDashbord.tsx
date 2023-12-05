import {useContext} from "react";
import PointsHistory from "./PointsHistory";
import PlayerStats from "./PlayerStats";
import Gameweek from "./Gameweek";
import Transfers from "./Transfers";
import NextFixture from "./NextFixture";
import VideoPlayList from "../../components/videoPlaylist/VideoPlayList";
import { authContext } from "../../contexts/AuthContext";


function AdminDashbord() {
  const {user} = useContext(authContext);
 
  return (
    <section className="h-full relative">
      {/* check if loged in user has a team */}
      {user?.team && (
        <div className="pt-6">
          {/* heading */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-20 ">
            <div className="leading-5 relative">
              <div>
                <h1 className="text-[18px] font-medium text-textDarkGreenColor">
                  Gameweek 8{" "}
                </h1>
                <p className="text-[11px] font-normal text-textDarkGreenColor">
                  5-7 October,2023
                </p>
              </div>
            </div>
            <div className="flex items-center flex-1 leading-5 gap-10">
              <div>
                <span className="text-[15px] font-medium text-textDarkGreenColor px-2 rounded-md bg-lightOrangeColor">
                  81
                </span>
                <p className="text-[12px] text-textDarkGreenColor">
                  Current Point
                </p>
              </div>
              <div>
                <span className="text-[15px] font-medium text-textDarkGreenColor">
                  50
                </span>
                <p className="text-[12px] text-textDarkGreenColor">
                  Avg Points
                </p>
              </div>
              <div>
                <span className="text-[15px] font-medium text-textDarkGreenColor">
                  131
                </span>
                <p className="text-[12px] text-textDarkGreenColor">
                  Highest point
                </p>
              </div>
              <div>
                <span className="text-[15px] font-medium text-textDarkGreenColor">
                  17303
                </span>
                <p className="text-[12px] text-textDarkGreenColor">
                  Gameweek rank
                </p>
              </div>
            </div>
          </div>
          {/* row 1 */}
          <div className="mt-9">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              {/* card left */}
              <div className=" lg:col-span-2">
                <PointsHistory />
              </div>
              {/* card middle */}
              <div className="">
                <PlayerStats />
              </div>
              {/* card right */}
              <div className="">
                <Gameweek />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 space-y-8 md:gap-5 md:space-y-0">
              <div>
                <VideoPlayList />
              </div>
              <div className="col-span-2">
                {/* top transfers */}
                <Transfers />
              </div>
              <div>
                <NextFixture />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashbord;
