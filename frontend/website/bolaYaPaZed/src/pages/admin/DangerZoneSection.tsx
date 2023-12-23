import React from 'react';

function DangerZoneSection() {
  return (
    <div 
        id='#danger'
        className='border-solid border-[1px] border-red-500 mt-8 rounded-md pt-5 px-5 pb-5'
        >
            {/* header */}
            <h3 className='text-[20px]'>Danger Zone</h3>
            {/* action section */}
            <div className='pt-5 flex flex-col justify-center space-y-2'>
                {/* delete admin account */}
                <div className='flex gap-2 items-center py-1'>
                    <input 
                     type='checkbox'
                     name='admin'
                     id='#admin'
                     onChange={()=>{''}}
                     className='b cursor-pointer'
                    />
                    <label htmlFor='#admin'>Do you want to Delete your Admin Account?</label>
                </div>

                <div className='flex gap-2 items-center py-1'>
                    <input 
                     type='checkbox'
                     id='#dismissCoach'
                     name='coach'
                     onChange={()=>{''}}
                     className='b cursor-pointer'
                    />
                    <label htmlFor='#dismissCoach'>Do you want to Dismiss Coach and Delete His/Her Account?</label>
                </div>


            </div>
       
    </div>
  )
}

export default DangerZoneSection;