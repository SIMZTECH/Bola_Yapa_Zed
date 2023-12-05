import React from 'react';
import { fixuresData,fixureDataType} from '../../assets/data/FixturesData';
import FixureCard from '../../components/fixure/FixureCard';
import ArrowButtonRight from '../../components/buttons/ArrowButtonRight';

function NextFixture() {
  return (
    <div>
        <div>
            <div className='leading-4'>
                <h3 className='b text-[14px] text-textDarkGreenColor font-medium'>Next fixtures</h3>
                <p className='text-[13px] text-textDarkGreenColor'>Saturday, 20 October 2023</p>
            </div>
            {/* cards */}
            <div className='pt-5'>
                {fixuresData.map((item,index)=>
                    <FixureCard 
                        data={item} 
                        key={index}                   
                    />
                )}
            </div>
            <div className='mt-10 flex items-center justify-end'>
                <ArrowButtonRight 
                text={'See more'} 
                callback={function (): void {
                      throw new Error('Function not implemented.');
                  } } />
            </div>
        </div>
    </div>
  )
}

export default NextFixture;