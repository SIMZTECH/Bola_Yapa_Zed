import React from 'react';
import fan01 from '../../assets/images/user01.png';
import FanItem from './FanItem';

function FansContainer() {
  return (
    <div className="flex relative items-center">
      <div className="absolute top-1/2">
        <FanItem img={fan01} control={false} />
      </div>
      <div className="absolute left-4 top-1/2">
        <FanItem img={fan01} control={false} />
      </div>
      <div className="absolute left-8 top-1/2">
        <FanItem img={fan01} control={false} />
      </div>
      <div className="absolute left-12 top-1/2">
        <FanItem img={fan01} control={true} />
      </div>
    </div>
  );
}

export default FansContainer