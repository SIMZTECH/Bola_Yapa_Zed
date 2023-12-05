/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";
import uploadImg01 from '../../assets/images/upload_img01.png';
import { AUTH_BASE_URL} from '../../config';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import uploadCloudinary from '../../util/uploadCloudinary';

function CreateTeam() {
  const {dispatch,role,token,user} = React.useContext(authContext);
  const navigate = useNavigate();

  // const {error,userData,loading} = FetchData("team/api/v1/get-all-teams");

  const [imagePreview,setImagePreview] = useState(uploadImg01);
  const [loading,setLoading] = useState<boolean>(false);
  const [uploadLoader,setUploadLoader] = useState<boolean>(false);


  const [formData,setFormData] = useState({
    logo:"",
    name:"",
    net_worth:0.0,
    category:'super league',
    description:''
  });

  const onChangeInputHandler=async(e:any)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleFileUpload = async(e:any)=>{
    const file = await e.target.files[0];

    setUploadLoader(true);

    // upload cloudinary
    await uploadCloudinary(file)
    .then((value)=>{
      if(value){
        setUploadLoader(false);
        setImagePreview(value.url);

        // bind file to form data
        setFormData({...formData,logo:value.url});

        console.log(value.url,"uploading");
      }
    })
    .catch((error)=>{
      setUploadLoader(false);
      console.log(error.message,"error message");
    })
  };

  const submithHandler=async(e:any)=>{
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${AUTH_BASE_URL}/team/api/v1/create-team`,{
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
        setLoading(false);
        toast.success(results.message);
        // update localstorage
       
        console.log(results,"updated user data");
        const {...rest} = results?.data;
         dispatch({
          type:"LOGIN_SUCCESS",
          payload:{
            user:{...rest},
            token,
            role
          }
        });
        
        navigate("/admin/dashbord");
      }
    } catch (error:any) {
      setLoading(false)
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className='px-3 sm:px-2'>
        {!user?.team && (
          <div className="layout_main_container bg-lightOrangeColor rounded-md shadow-sm mb-10">
            {/* search team header */}
            <div>
              <div>
                <h1 className="text-[18px] leading-8 text-textDarkGreenColor font-medium">
                  Add Team
                </h1>
                <p className="flex gap-1">
                  <span className="text-[15px] text-textDarkGreenColor text-opacity-70">
                    <IoInformationCircleOutline />
                  </span>
                  <span className="text-[11px] text-textDarkGreenColor text-opacity-70">
                    Note: once a team is created, you'll become its admin
                    instantly
                  </span>
                </p>
              </div>
              {/* form container */}
              <div className="sm:mt-8 mt-4">
                <form
                  onSubmit={submithHandler}
                  className="grid grid-cols-1 md:grid-cols-4 sm:gap-4 space-y-5"
                >
                  {/* left */}
                  <div>
                    <div className="sm:w-[170px] p-1 sm:h-[190px] bg-whiteSmokeColor rounded-md relative">
                      <figure>
                        <img
                          src={imagePreview}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <input
                        type="file"
                        id="#upload"
                        name="logo"
                        onChange={handleFileUpload}
                        hidden
                        accept='.png, .jpeg, .gif'
                      />
                      <label
                        className="absolute  right-1 rounded-full shadow-md
                     w-[45px] h-[45px] bg-white  bottom-2 cursor-pointer flex items-center justify-center"
                        htmlFor="#upload"
                      >
                        <span className="text-[25px] w-full h-full flex items-center justify-center text-red-700">
                          {uploadLoader?<ClipLoader color='red' size={25}/>:<IoCloudUploadSharp />}
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* right */}
                  <div className="b col-span-2 ">
                    <div className="space-y-1 mb-2">
                      <label
                        htmlFor="#teamName"
                        className="text-[15px] text-textDarkGreenColor"
                      >
                        Team Name
                      </label>
                      <div className="b bg-whiteSmokeColor h-[35px] rounded-md shadow-sm">
                        <input
                          type="text"
                          required
                          name="name"
                          id="#teamName"
                          value={formData.name}
                          onChange={onChangeInputHandler}
                          placeholder="Provide team name"
                          className="w-full h-full bg-transparent px-5 focus:outline-none  
                     placeholder:text-[13px] placeholder:font-light"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 mb-2">
                      <label
                        htmlFor="#networth"
                        className="text-[15px] text-textDarkGreenColor"
                      >
                        Net Worth
                      </label>
                      <div className="b bg-whiteSmokeColor h-[35px] rounded-md shadow-sm">
                        <input
                          type="text"
                          name="net_worth"
                          id="#networth"
                          value={formData.net_worth}
                          onChange={onChangeInputHandler}
                          placeholder="$"
                          className="w-full h-full bg-transparent px-5 
                     placeholder:text-[13px] placeholder:font-light focus:outline-none "
                        />
                      </div>
                    </div>
                    <div className="space-y-1 mb-2">
                      <label
                        htmlFor="#category"
                        className="text-[15px] text-textDarkGreenColor"
                      >
                        Category
                      </label>
                      <div className="b bg-whiteSmokeColor h-[35px] rounded-md shadow-sm">
                        <select
                          name="category"
                          id="#category"
                          value={formData.category}
                          onChange={onChangeInputHandler}
                          className="h-full w-full bg-transparent focus:outline-none cursor-pointer"
                        >
                          <option value={""}>Select League</option>
                          <option value={"Super League"}>Super League</option>
                          <option value={"Championship"}>Championship</option>
                          <option value={"League One"}>League one</option>
                          <option value={"League Two"}>League two</option>
                          <option value={"Madalaz"}>Madalaz</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1 mb-2">
                      <label
                        htmlFor="#description"
                        className="text-[15px] text-textDarkGreenColor"
                      >
                        Team Description
                      </label>
                      <div className="b bg-whiteSmokeColor rounded-md shadow-sm">
                        <textarea
                          rows={5}
                          name="description"
                          id="#description"
                          value={formData.description}
                          onChange={onChangeInputHandler}
                          placeholder="describe your team"
                          className=" w-full bg-transparent placeholder:text-[15px] px-2 py-2 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  {/* submit */}
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-full flex h-[50px] bg-textDarkGreenColor rounded-sm text-white items-center justify-center"
                    >
                      {loading ? (
                        <HashLoader color="white" size={30} />
                      ) : (
                        `Create Team`
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateTeam;