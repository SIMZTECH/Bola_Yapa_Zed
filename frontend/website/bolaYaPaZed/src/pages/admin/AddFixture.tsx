/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react'
import NoticeTag from '../../components/tags/NoticeTag';
import { FetchData } from '../../hooks/FetchData';
import { HashLoader, ScaleLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { AUTH_BASE_URL } from '../../config';
import { authContext } from '../../contexts/AuthContext';

type propType = {
  error: string;
  userData: any;
  loading: boolean;
};

function AddFixture() {
    const token:any = localStorage.getItem("token");
    const {user}:any = useContext(authContext);

    // from APi fetch
    const {error,loading,userData}:propType = FetchData("team/api/v1/get-all-teams",token);
    const [submitLoader,setSubmitLoader] = useState<boolean>(false);

    // state content
    const [formData, setFormData] = useState({
      date:'',
      time:'',
      category:'regular',
      awayTeam:'', //will contain the team deatils
      homeTeam:user?.team?._id, //will contain the team deatils
      approved:'approved',
      stadium:'',
    });

    console.log(userData,"data fetched");

    const onChangeHandler=async(e:any)=>{
        // validate entries
        if(e.target.name=="awayTeam"){
            const foundName = userData?.data.find((val:any)=>val?.name===`${e.target.value}`)
            setFormData({...formData,[e.target.name]:foundName._id});

        }else{
            setFormData({...formData,[e.target.name]:e.target.value});
        }
    };

  
    const clearEntriesHandler=():void=>{
        setFormData({
            date:'',
            time:'',
            category:'',
            awayTeam:'',
            homeTeam:'',
            approved:'',
            stadium:''
        });
    };

    const onSubmitHandler=async(e:any)=>{
        e.preventDefault();

        console.log(formData,"submitting....");

        setSubmitLoader(true);
        try {
            const res = await fetch(`${AUTH_BASE_URL}/fixture/api/v1/create-fixture`,{
                method:"post",
                headers:{
                    "Content-Type":"Application/json",
                    authorization:`Bearer ${token}`
                },
                body:JSON.stringify(formData)
            });

            const results = await res.json();
            if(!res.ok){
                throw new Error(results.message);
            }else{
                setSubmitLoader(false);
                toast.success(results.message);
                // clear entries
                clearEntriesHandler();
            }
            
        } catch (error:any) {
            setSubmitLoader(false);
            toast.error(error.message);
        }
    };

  return (
    <section className="h-full relative">
      <div className="container">
        <div>
          <h2 className="mb-3 text-[20px] text-textDarkGreenColor font-medium">
            Add Fixture
          </h2>
          {/* notice */}
          <NoticeTag
            text={
              "Every fixture created or modified will require verification before considered valid!!"
            }
          />
          {/* form for fixutre */}
          <main className="mt-6">
            {/* loading data */}
            {loading && (
              <div>
                <p className="text-[35px] w-full text-center pt-[100px]">
                  <ScaleLoader color="#FFA500" />
                </p>
              </div>
            )}

            {/* display error message */}
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}

            {/* if true show data */}
            {userData && !loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* left */}
                <form onSubmit={onSubmitHandler} className="b col-span-2">
                  <div className="space-y-7 mb-10">
                    {/* opponents teams*/}
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#homeTeam"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          Home Team
                        </label>
                        <input
                          name="homeTeam"
                          readOnly
                          value={user?.team?.name}
                          placeholder={`${user?.team?.name}`}
                          id="#homeTeam"
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#awayTeam"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          away Team
                        </label>
                        <select
                          name="awayTeam"
                          id="#awayTeam"
                          required
                          onChange={onChangeHandler}
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        >
                          <option value="">select</option>
                          {userData?.data.map((val: any, index: number) => {
                            if (val._id != user?.team?._id) {
                              return (
                                <option key={index} value={val?.name}>
                                  {val?.name}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                    </div>

                    {/* time and date */}
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#date"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          onChange={onChangeHandler}
                          value={formData.date}
                          id="#date"
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#time"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={onChangeHandler}
                          id="#time"
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        />
                      </div>
                    </div>
                    {/* stadium */}
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#stadium"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          Stadium
                        </label>
                        <select
                          name="stadium"
                          id="#stadium"
                          required
                          onChange={onChangeHandler}
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        >
                          <option value={""}>select</option>
                          <option value={"Heroes"}>Heroes</option>
                          <option value={"Levy Mwanawasa"}>
                            Levy Mwanawasa
                          </option>
                          <option value={"Woodlands"}>Woodlands</option>
                          <option value={"Nkoloma"}>Nkoloma</option>
                        </select>
                      </div>

                      <div className="flex flex-[45%] flex-col space-y-1">
                        <label
                          htmlFor="#ticketPrice"
                          className="text-[13px] text-textDarkGreenColor"
                        >
                          Ticket Price
                        </label>
                        <input
                          type="text"
                          readOnly
                          placeholder="Fixed by vendors"
                          name="ticketPrice"
                          id="#ticketPrice"
                          className="text-[14px] bg-lightPrimaryText bg-opacity-5 text-textDarkGreenColor px-1 py-2 cursor-pointer focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  {/* submit btn */}
                  <button
                    type="submit"
                    className="w-full font-light flex items-center justify-center bg-orange-500 h-[40px] rounded-md text-white"
                  >
                    {submitLoader ? (
                      <HashLoader color="white" size={18} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
                {/* right-fome */}
                <div className=""></div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

export default AddFixture