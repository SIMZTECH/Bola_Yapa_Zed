type propsType={
    video:string,
    title:string
}

function VideoItem({video,title}:propsType) {
  return (
    <div className="mb-5 cursor-pointer">
      <div className="flex gap-3 ">
        {/* video */}
        <div className="basis-[25%]">
          <figure className="w-full h-full  rounded-md">
            <img
              src={video}
              className="w-full h-full rounded-md object-cover"
            />
          </figure>
        </div>
        {/* titlr,time */}
        <div className="flex flex-col space-y-2 flex-1">
          <h3 className="text-[12px] leading-4 font-semibold text-textDarkGreenColor">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-[12px] text-textDarkGreenColor text-opacity-60">
              20 mins ago
            </p>
            <p className="text-[13px] text-textDarkGreenColor font-semibold">
              02:47
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem