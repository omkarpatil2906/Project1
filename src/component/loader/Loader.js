import React from 'react'
import {lineSpinner} from 'ldrs'



function Loader() {
  
    lineSpinner.register()
    return (
        <div>
            <div className='h-screen w-screen bg-[#222831] flex justify-center items-center'>
                <l-line-spinner
                    size="100"
                    stroke="4"
                    speed="1"
                    color="white"
                ></l-line-spinner>
            </div>

        </div>
    )
}

export default Loader
