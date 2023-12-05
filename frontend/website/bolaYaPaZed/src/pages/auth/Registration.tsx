/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from 'react';
import { IoIosFootball } from "react-icons/io";
import { FaGoogle,FaTwitter,FaFacebook} from "react-icons/fa";
import bg_img02 from '../../assets/images/bg_img03.png';
import footballer from '../../assets/images/barbra_banda01.png';
import {Link,useNavigate} from 'react-router-dom';
import { AUTH_BASE_URL } from '../../config';
import {HashLoader}  from 'react-spinners';
import { toast } from 'react-toastify';

type formDataType = {
  name:string,
  email:string,
  password:string,
  role:string,
  gender:string,
  policies:string;
};

function Registration(){
  
  const [formData,setFormData] = useState<formDataType>({
    name:'',
    email:'',
    password:'',
    role:'',
    gender:'',
    policies:'false'
  });
  const [loading,setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // methods
  const inputChangeHandler=async(e:any)=>{
    setFormData({...formData,[e.target?.name]:e.target?.value});
    if(e.target?.checked){
      setFormData({...formData,[e.target?.name]:e.target?.checked});
    }
  };

  const submitHandler=async(e:any)=>{
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch(`${AUTH_BASE_URL}/auth/api/v1/register-user`,{
        method:"post",
        headers:{
          "Content-Type":"Application/json"
        },
        body:JSON.stringify(formData)
      });

      const results = await res.json();

      console.log(results,"retrived data");


      if(!res.ok){
        throw new Error(results.message);
      }
      setLoading(false);
      toast(results.message);

      // navigate to login screen
      navigate("/login");
      
    } catch (error:any) {
      setLoading(false);
      toast(error.message);
    }

  };


  return (
    <div className="md:pt-12 pt-5 register relative">
      <figure className='absolute -z-10 top-0 bottom-0 left-0 w-full h-full'>
        <img src={bg_img02} className='h-full w-full object-fill'/>
      </figure>
      <div className="  w-full sm:max-w-4xl mx-auto p-3">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-lg">
          {/* left */}
          <div className="w-full bg-[#07170a] hidden sm:block bg-opacity-90 sm:pb-2 left_block rounded-tl-lg rounded-bl-lg">
            <div className="flex flex-col pt-5 px-10 space-y-3">
              <div className="w-[45px] h-[45px] bg-[#47694c] flex flex-col justify-center items-center rounded-md">
                <span className="text-[12px] font-medium text-white">
                  Futbol
                </span>
                <span className="text-[20px] text-white">
                  <IoIosFootball />
                </span>
              </div>
              <div className="text-start text-[18px] leading-6 text-white pt-3">
                Welcome
                <br /> to Bola Ya Pa{" "}
                <span className=" text-[25px] font-semibold text-[#2a4e30]">
                  ZED!
                </span>
              </div>
            </div>
            {/* image section */}
            <figure className="flex justify-center">
              <img src={footballer} className="w-[220px] h-[320px]" />
            </figure>
            <div className="flex items-center justify-center">
              <span className=" text-[11px] font-extralight text-white text-center w-full leading-4 py-1">
                Football Associacition of Zambia <br />
                <span className="text-[9px]">Official football manager</span>
              </span>
            </div>
          </div>

          {/* right */}
          <div className="col-span-2 pt-2 pb-3">
            <div className="w-full text-end sm:px-10 pr-3 mt-1">
              <span className=" font-normal text-[15px] w-full">
                Already a member?
                <Link
                  to={"/login"} 
                  className=" text-blue-500 cursor-pointer"> 
                  Sign in
                </Link>
              </span>
            </div>
            {/* form */}
            <div className="mt-5 px-3 sm:pl-20 space-y-2 sm:pr-8">
              <span className="text-[16px] w-full font-medium text-textDarkGreenColor">
                Sign up to bola
              </span>
              <div className="w-full">
                <div className="sm:w-[90%] flex items-center justify-between gap-3">
                  {/* google btn */}
                  <button className="flex w-[80%] items-center justify-center bg-textDarkGreenColor text-white px-2 h-[30px] rounded-sm gap-3 cursor-pointer">
                    <span>
                      <FaGoogle />
                    </span>
                    <span className="text-[15px] font-light">
                      Sign up with google
                    </span>
                  </button>
                  {/* twitter btn */}
                  <button className="w-[30px] bg-textDarkGreenColor bg-opacity-30 flex items-center justify-center h-[30px] text-textDarkGreenColor text-[18px] rounded-sm">
                    <FaTwitter />
                  </button>
                  {/* facebook btn */}
                  <button className="w-[30px] bg-textDarkGreenColor bg-opacity-30 flex items-center justify-center h-[30px] text-textDarkGreenColor text-[20px] px-2 rounded-sm">
                    <FaFacebook />
                  </button>
                </div>
              </div>
              {/* line */}
              <div className="w-full pt-3">
                <div className="sm:w-[90%] relative pt-2 pb-2">
                  <span className="w-full h-[0.5px] absolute bg-textDarkGreenColor mx-auto top-1/2 transform -translate-y-1/2"></span>
                  <h1 className="absolute text-[19px] left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white z-10 font-medium px-1 text-textDarkGreenColor">
                    or
                  </h1>
                </div>
              </div>
              <div className="w-full mt-3">
                <form onSubmit={submitHandler} className="sm:w-[90%] space-y-2">
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="#fullName">Full Name</label>
                    <input
                      placeholder="Enter your full name"
                      value={formData.name}
                      required
                      onChange={inputChangeHandler}
                      id="fullName"
                      name="name"
                      className=" placeholder:text-textDarkGreenColor text-[14px] focus:outline-none w-full px-2 py-0 h-[30px] rounded-sm bg-textDarkGreenColor bg-opacity-50"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="#emailAddress">Email Address</label>
                    <input
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={inputChangeHandler}
                      id="emailAddress"
                      name="email"
                      className=" placeholder:text-textDarkGreenColor text-[14px] focus:outline-none w-full px-2 py-0 h-[30px] rounded-sm bg-textDarkGreenColor bg-opacity-50"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="#emailAddress">Password</label>
                    <input
                      placeholder="Password"
                      value={formData.password}
                      onChange={inputChangeHandler}
                      required
                      id="password"
                      name="password"
                      className=" placeholder:text-textDarkGreenColor text-[14px] focus:outline-none w-full px-2 py-0 h-[30px] rounded-sm bg-textDarkGreenColor bg-opacity-50"
                    />
                  </div>
                  <div className="w-full flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <label htmlFor="#role">Your Role</label>
                      <select
                        name="role"
                        id="#role"
                        value={formData.role}
                        onChange={inputChangeHandler}
                        className=" bg-textDarkGreenColor py-1 rounded-sm bg-opacity-40 focus:outline-none"
                      >
                        <option value={""}>Select</option>
                        <option value={"fan"}>Fan</option>
                        <option value={"coach"}>Coach</option>
                        <option value={"admin"}>Admin</option>
                      </select>
                    </div>
                    <div className="items-center flex gap-3">
                      <label htmlFor="#gender">Gender</label>
                      <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={inputChangeHandler}
                        className=" bg-textDarkGreenColor py-1 rounded-sm bg-opacity-40 focus:outline-none"
                      >
                        <option value={""}>Select</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"}>Other</option>
                      </select>
                    </div>
                  </div>
                  {/* check box */}
                  <div className='flex items-start gap-4 sm:gap-8 pt-3'>
                    <input 
                      type='checkbox'
                      name='policies'
                      value={formData.policies}
                      required
                      onChange={inputChangeHandler}
                      className=' cursor-pointer focus:outline-none border border-solid border-textDarkGreenColor placeholder:bg-textDarkGreenColor '
                    />
                    <p className='text-[13px] text-justify'>
                      Creating an Account means you are okay with our 
                      <span className=' text-blue-500 font-normal'> Terms of Service,Privacy Policy</span> and
                      our default <span className='text-blue-500 font-normal'>Notification Setings.</span> 
                    </p>
                  </div>
                  <button className=' bg-textDarkGreenColor text-white h-[30px] w-full sm:w-[50%] rounded-sm text-[15px] flex items-center justify-center'>
                    {loading?<HashLoader size={18} color='white'/>:`Create Account`}
                  </button>
                </form>
                {/* rights */}
                <p className=' text-[12px] mt-5 sm:w-[70%]'>
                  This site is protected reCAPTCHA and the Google
                  <span className=' text-blue-400 font-normal'> Privacy Policy</span > and <span className=' text-blue-400 font-normal'>Terms of Service apply.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Registration