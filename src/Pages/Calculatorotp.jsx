import React from 'react'
import Navbar from '../Component/Navbar'

import Monitors from '../General/Monitors'
import Creditscoreotp from '../General/Creditscoreotp'

const  Calculatorotp = () => {
  return (
    <div>
          <div className='sm:p-4 md:p-6 lg:p-8'>
                   <Navbar />
                   <Creditscoreotp />
                   <Monitors />
          </div>
    </div>
  )
}

export default Calculatorotp