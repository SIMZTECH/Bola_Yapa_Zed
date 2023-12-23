/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import SearchBar from '../../components/search/SearchBar';
import imgProfile from '../../assets/images/user02.png';
import { FaBell } from "react-icons/fa";
import TabsBtn from '../../components/buttons/TabsBtn';
import { FetchData } from '../../hooks/FetchData';
import { ScaleLoader } from 'react-spinners';
import FixtureEnhancedCard from '../../components/fixure/FixtureEnhancedCard';
import { AUTH_BASE_URL } from '../../config';
import { authContext } from '../../contexts/AuthContext';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

type propType={
  error:string,
  userData:any,
  loading:boolean
}

function Fixtures() {
  const token:any = localStorage.getItem("token");
  const navigate = useNavigate();

  const {user} = useContext(authContext);



  const {error,loading,userData}:propType = FetchData("fixture/api/v1/getFixtures",token)
  const [querry,setSearchQuerry] = useState<string>('');
  const [tab,setTab] = useState<string>("All Matches");
  const [fetchedData,setFetchedData] = useState<any>(userData);
  const [loadingData,setLoadingData] = useState<boolean>(loading);
  const [errorFetching,setErrorFetching] = useState<string>(error);
  const [searchLoader,setSearchLoader] = useState<boolean>(false);


  // TODO Fetch user data update

  async function searchHandler(e:any){
    e.preventDefault();

    // API request
    setSearchLoader(true);
    
    try {
      const res = await fetch(`${AUTH_BASE_URL}/fixture/api/v1/getFixtures?search=${querry}`,
        {
          method: "get",
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );

      const results = await res.json();

      if (!res.ok) {
        throw new Error(results.message);
      } else {
        setSearchLoader(false);
        setFetchedData(results);

        console.log(results?.data, "searched querry");
      }
    } catch (error: any) {
      setSearchLoader(false);
      setErrorFetching(error.message);
    }
  }

  useEffect(()=>{
    // set current state
    setFetchedData(userData);
    setErrorFetching(error);
    setLoadingData(loading);


  },[error, loading, userData]);


  return (
    <section className="h-full relative">
      <div className="container">
        <div>
          {/* search */}
          <div className="flex flex-row items-center gap-5">
            <div className="flex-1 ">
              <SearchBar
                text={"Search Fixture"}
                value={querry}
                onChangeText={setSearchQuerry}
                callback={searchHandler}
                loader={searchLoader ? true : false}
              />
            </div>
            {/* action section */}
            <div className="w-[20%] hidden md:block">
              <div className="w-full flex justify-end items-center gap-3">
                <h3 className="text-[13px]">{user?.name.toLowerCase()}</h3>
                <figure className="h-[30px] w-[30px] rounded-full">
                  <img
                    src={user?.photo}
                    className="w-full h-full object-cover rounded-full"
                  />
                </figure>
                <div>
                  <button className="relative w-[25px] text-textDarkGreenColor text-opacity-60 h-[25px] flex items-center justify-center">
                    <FaBell />
                    <div className="absolute top-1 right-1 w-[7px] h-[7px] bg-red-700 rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* main */}

          <main className="pt-12">
            {/* button tab */}
            <div className="h-[30px] border-b-[1px] border-b-orange-300 relative">
              <div className="b absolute justify-end w-full flex gap-4 top-0 bottom-0 h-[30px]">
                <TabsBtn
                  text={"All Matches"}
                  state={tab == "All Matches" ? true : false}
                  callback={(flag: string) => setTab(flag)}
                />
                <TabsBtn
                  text={"H/matches"}
                  state={tab == "H/matches" ? true : false}
                  callback={(flag: string) => setTab(flag)}
                />
                <TabsBtn
                  text={"A/matches"}
                  state={tab == "A/matches" ? true : false}
                  callback={(flag: string) => setTab(flag)}
                />
              </div>
            </div>
            {/* post fixture btn */}
            <div className='py-4'>
              <button 
                onClick={()=>navigate("add-fixture")}
                className='w-[150px] flex items-center justify-evenly bg-orange-400 py-2 px-2 rounded-md'>
                <h4 className='text-white text-[14px] leading-5'>Add Fixture</h4>
                <span className='text-white'><IoMdAdd /></span>
              </button>
            </div>
            {/* content data */}
            <div className="">
              {loadingData && (
                <div>
                  <div>
                    <p className="text-[35px] w-full text-center pt-[100px]">
                      <ScaleLoader color="#FFA500" />
                    </p>
                  </div>
                </div>
              )}

              {errorFetching && (
                <div>
                  <div>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {/* tab switch */}
              <div>
                {tab == "All Matches" && (
                  <>
                    {fetchedData?.data.length > 0 && !error && (
                      <div className="mt-5">
                        {fetchedData?.data.map((val: any, index: number) => (
                          <div
                            key={index}
                            className="b cursor-pointer hover:bg-lightGreenColor hover:bg-opacity-30"
                          >
                            <FixtureEnhancedCard data={val} />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
                {/* H/match */}
                {tab =="H/matches" &&(
                  <div>H/Macthes</div>
                )}
                {/* A/Match */}
                {tab =="A/matches" &&(
                  <div>A/Macthes</div>
                )}

              </div>

              {/* H/Match */}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Fixtures