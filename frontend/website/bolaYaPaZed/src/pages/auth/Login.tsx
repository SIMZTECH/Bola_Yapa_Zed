/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState,useContext}from 'react';
import bootImg from '../../assets/images/lottieFile_bola.gif';
import bg_img02 from '../../assets/images/bg_img03.png';
import {Link, useNavigate} from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AUTH_BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';

type formDataType = {
  email:string,
  password:string,
  rememberMe:string;
};


function Login() {
  const [formData,setFormData] = useState<formDataType>({
    email:'',
    password:'',
    rememberMe:'false'
  });

  const {dispatch}:any = useContext(authContext);

  const [loading,setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  
  // methods
  const inputChangeHandler=async(e)=>{
    setFormData({...formData,[e.target?.name]:e.target?.value});
    if(e.target?.checked){
      setFormData({...formData,[e.target?.name]:e.target?.checked});
    }
  };

  const submitHandler=async(e:any)=>{
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${AUTH_BASE_URL}/auth/api/v1/login-user`,{
        headers:{
          "Content-Type":"Application/json"
        },
        method:"post",
        body:JSON.stringify(formData)
      });

      const results = await res.json();
      if(!res.ok){
        setLoading(false);
        throw new Error(results.message);

      }else{
        // dispatch the data
        dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:results.data,
            token:results.token,
            role:results.role
          }
        });


        setLoading(false);
        toast.success(results.message);
        // redirect to admin
        if(results.role=="admin"){
          navigate("/admin/");
        }
      }

    } catch (error:any) {
      setLoading(false);
      toast.error(error.message)
    }
  };

  return (
    <div className="relative h-[100vh]">
      <figure className='absolute -z-10 top-0 bottom-0 left-0 w-full h-full'>
        <img src={bg_img02} className='h-full w-full object-fill'/>
      </figure>
      <div className='pt-14'>
      <div className="w-full px-1 max-w-[350px] mx-auto">
        <div className="sm:px-3 px-2 py-1 bg-white rounded-md">
          <div className="flex items-center justify-center flex-col">
            <figure className="w-[100px] h-[80px]">
              <img src={bootImg} />
            </figure>
            <div className=" text-center w-[150px] text-[22px] leading-6 mt-2 text-lightPrimaryText">
              Bola Ya Pa
              <br /> <span>ZED</span>
            </div>
          </div>
          <form className='py-4' onSubmit={submitHandler}>
            <div className="w-full flex flex-col mb-4">
              <input
                placeholder="Your Email Address"
                required
                value={formData.email}
                onChange={inputChangeHandler}
                type='email'
                id="emailAddress"
                name="email"
                className=" placeholder:text-textDarkGreenColor text-[14px] focus:outline-none w-full px-2 py-0 h-[35px] rounded-sm bg-textDarkGreenColor bg-opacity-20"
              />
            </div>
            <div className="w-full flex flex-col mb-4">
              <input
                placeholder="Password"
                required
                value={formData.password}
                onChange={inputChangeHandler}
                type='password'
                id="password"
                name="password"
                className=" placeholder:text-textDarkGreenColor text-[14px] focus:outline-none w-full px-2 py-0 h-[35px] rounded-sm bg-textDarkGreenColor bg-opacity-20"
              />
            </div>
            <button className=" bg-textDarkGreenColor text-white h-[35px] w-full rounded-sm text-[15px] mb-3 flex items-center justify-center">
              {loading?<HashLoader color='white' size={25} />  :'Login'}
            </button>
            <div className="flex gap-3 mt-4 items-center">
              <input
                type="checkbox"
                name="rememberMe"
                value={formData.rememberMe}
                onChange={inputChangeHandler}
                className="cursor-pointer focus:outline-none border border-solid border-textDarkGreenColor placeholder:bg-textDarkGreenColor "
              />
              <p className="text-[16px] text-justify text-lightPrimaryText">Remember Me</p>
            </div>
          </form>
          <div className=" font-normal text-[14px] w-full mb-3 text-center text-lightPrimaryText">
            Don't have an Account?{" "}
            <Link to={"/register"} className=" text-blue-500 cursor-pointer">
              Register
            </Link>
          </div>
        </div>
      </div>

      </div>
      {/* footer */}
      <div className='absolute bottom-16 w-full flex justify-center'>
        <p className='text-[11px] text-textDarkGreenColor'>All Rights Reserved @{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Login