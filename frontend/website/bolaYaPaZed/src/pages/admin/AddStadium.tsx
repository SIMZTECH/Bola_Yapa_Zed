/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useState } from 'react'
import { FaUpload } from "react-icons/fa";
import uploadCloudinary from '../../util/uploadCloudinary';
import { toast } from 'react-toastify';
import { ClipLoader, HashLoader } from 'react-spinners';
import { AUTH_BASE_URL } from '../../config';
import { authContext } from '../../contexts/AuthContext';

type formDataType={
    name:string,
    photo:string,
    description:string,
    capacity:number,
    location:string
}

type propsTpe={
    callback:Function
}

function AddStadium({callback}:propsTpe) {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    const {dispatch}:any = useContext(authContext);
    // states
    const [uploadPhotoLoader,setUploadPhotoLoader] = useState<boolean>(false);
    const [submitLoader,setSubmitLoader] = useState<boolean>(false);
    const [previewPhoto,setPriviewPhoto] = useState('');
    const [formData,setFormData] = useState<formDataType>({
        name:'',
        photo:'',
        description:'',
        capacity:0,
        location:''
    });

    // handlers
    const onChangeHandler=async(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const uploadFileHandler=async(e:any)=>{
        const file:File = e.target.files[0];
        // invoke upload handler method
        setUploadPhotoLoader(true);
        await uploadCloudinary(file)
        .then((val)=>{
            if(val){
                setUploadPhotoLoader(false);
                setPriviewPhoto(val.url);
                setFormData({...formData,photo:val.url});
            }
        })
        .catch((error)=>{
            toast.error(error.message);
            setUploadPhotoLoader(false);
        });
    };

    const onSubmitHandler=async(e:any)=>{
        // prevent default submission
        e.preventDefault();

        console.log(formData,"submitting.....")

        setSubmitLoader(true);
        try {
            const res = await fetch(`${AUTH_BASE_URL}/stadium/api/v1/create-stadium`,{
                method:"post",
                headers:{
                    "Content-Type":"Application/json",
                    authorization:`Bearer ${token}`
                },
                body:JSON.stringify(formData)
            });

            const results:any = await res.json();
            if(!res.ok){
                throw new Error(results.message);
            }else{
                setSubmitLoader(false);
                // close window of add
                callback(false);
                toast.success(results.message);

                // update local storage
                const {...rest} = results?.data;
                dispatch({
                 type:"LOGIN_SUCCESS",
                 payload:{
                   user:{...rest},
                   token,
                   role
                 }
               });
            }
        } catch (error:any) {
            setSubmitLoader(false);
            toast.error(error.message);
        }

    };


  return (
    <div className="px-2 pt-2 pb-2">
      {/* add stadium form */}
      <form 
        onSubmit={onSubmitHandler}
        className="space-y-3">
        {/* name, photo */}
        <div className="flex items-center gap-3">
          <div className="flex-[40%]">
            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
              placeholder="Stadium Name"
              className="px-2 h-[30px] flex items-center bg-lightOrangeColor bg-opacity-30 border-[1px] border-solid border-transparent placeholder:text-[13px] placeholder:text-textDarkGreenColor 
                     placeholder:text-opacity-60 text-[15px] text-textDarkGreenColor
                     focus:outline-none focus:border-solid focus:border-[1px] focus:border-orange-300 w-full"
            />
          </div>
          <div className="flex-[40%] flex items-center justify-between px-3">
            {/* button */}
            <label
              htmlFor="#upload"
              className="flex cursor-pointer items-center space-x-1 text-[20px] text-textDarkGreenColor text-opacity-70"
            >
              {uploadPhotoLoader?<ClipLoader color='orange' size={20} />:<FaUpload />}
              <p className="text-[15px]">Upload Photo</p>
            </label>
            {/* preview stadium */}
            {previewPhoto && (
              <figure className="w-[25px] h-[25px] border-solid border-[1px] border-orange-500 rounded-full">
                <img src={previewPhoto} className="b object-cover rounded-full" />
              </figure>
            )}
            {/* hidden input for upload */}
            <input
              name="photo"
              type="file"
              onChange={uploadFileHandler}
              hidden
              accept=".png,.jpeg,.gif"
              id="#upload"
            />
          </div>
        </div>
        {/* location, capacity */}
        <div className="flex items-center gap-3">
          <div className="flex-[40%]">
            <input
              type="text"
              required
              name="location"
              value={formData.location}
              onChange={onChangeHandler}
              placeholder="Stadium Location"
              className="px-2 h-[30px] flex items-center bg-lightOrangeColor bg-opacity-30 border-[1px] border-solid border-transparent placeholder:text-[13px] placeholder:text-textDarkGreenColor 
                     placeholder:text-opacity-60 text-[15px] text-textDarkGreenColor
                     focus:outline-none focus:border-solid focus:border-[1px] focus:border-orange-300 w-full"
            />
          </div>
          <div className="flex-[40%] flex items-center justify-between px-3">
            {/* Capacity */}
            <input
              type="number"
              name="capacity"
              required
              value={formData.capacity}
              onChange={onChangeHandler}
              placeholder="Stadium Capacity"
              className="px-2 h-[30px] flex items-center bg-lightOrangeColor bg-opacity-30 border-[1px] border-solid border-transparent placeholder:text-[13px] placeholder:text-textDarkGreenColor 
                     placeholder:text-opacity-60 text-[15px] text-textDarkGreenColor 
                     focus:outline-none focus:border-solid focus:border-[1px] focus:border-orange-300 w-full"
            />
          </div>
        </div>
        {/* description */}
        <div className="">
          <textarea
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={onChangeHandler}
            placeholder="describe team stadium"
            className="p-2 flex items-center bg-lightOrangeColor bg-opacity-30 border-[1px] border-solid border-transparent placeholder:text-[13px] placeholder:text-textDarkGreenColor 
                     placeholder:text-opacity-60 text-[15px] text-textDarkGreenColor
                     focus:outline-none focus:border-solid focus:border-[1px] focus:border-orange-300 w-full"
          />
        </div>
        {/* submit btn */}
        <button
          type="submit"
          className="h-[35px] bg-orange-400 rounded-md flex items-center justify-center w-full"
        >
          <h3 className="text-[17px] text-white font-light">{submitLoader?<HashLoader color='white' size={18} />:'Submit'}</h3>
        </button>
      </form>
    </div>
  );
}

export default AddStadium