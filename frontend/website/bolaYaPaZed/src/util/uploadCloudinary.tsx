/* eslint-disable @typescript-eslint/no-explicit-any */
const cloud_name = import.meta.env.VITE_CLOUD_NAME;
const preset_name = import.meta.env.VITE_UPLOAD_PRESET_NAME


const uploadCloudinary = async (file:File) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", preset_name);
  uploadData.append("cloud_name", cloud_name);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "post",
      body: uploadData,
    }
  );

  const results = await res.json();

  return results;
};

export default uploadCloudinary;