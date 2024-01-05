import React, { createContext } from 'react'
import Sofa from '../sofa/Sofa'
import Chairs from '../chairs/Chairs'

const MyContext = createContext()

function MyContextApi() {
  return (
    <div>
        <MyContext.Provider value={}>
            <Sofa/>
            <Chairs/>
        </MyContext.Provider>
      
    </div>
  )
}

export default MyContextApi
