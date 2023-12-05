import React from 'react'

function ClockTick() {
  return (
    <div className="flex items-center justify-between">
      {/* day */}
      <div className="leading-5 flex gap-2">
        <div>
          <span className="text-[20px] font-medium text-textDarkGreenColor">
            08
          </span>
          <p className="text-[11px] font-medium text-textDarkGreenColor text-opacity-60">
            Days
          </p>
        </div>
        <span className='text-[20px] font-medium text-textDarkGreenColor'>:</span>
      </div>
      
      {/* hour */}
      <div className="leading-5 flex gap-2">
        <div>
          <span className="text-[20px] font-medium text-textDarkGreenColor">
            07
          </span>
          <p className="text-[11px] font-medium text-textDarkGreenColor text-opacity-60">
            Hours
          </p>
        </div>
        <span className='text-[20px] font-medium text-textDarkGreenColor'>:</span>
      </div>
      {/* minutes*/}
      <div className="leading-5 flex gap-2 ">
        <div>
          <span className="text-[20px] font-medium text-textDarkGreenColor">
            03
          </span>
          <p className="text-[11px] font-medium text-textDarkGreenColor text-opacity-60">
            Minutes
          </p>
        </div>
        <span className='text-[20px] font-medium text-textDarkGreenColor'>:</span>
      </div>
      {/* seconds*/}
      <div className="leading-5 flex gap-2">
        <div>
          <span className="text-[20px] font-medium text-textDarkGreenColor">
            30
          </span>
          <p className="text-[11px] font-medium text-textDarkGreenColor text-opacity-60">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClockTick