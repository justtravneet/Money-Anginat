import React from 'react'
import Navbar from '../Component/Navbar'
import Creditscore from '../General/Creditscore'
import Monitors from '../General/Monitors'
import Popup from '../General/Popup'

const Calculator = () => {
  return (
    <div>
          <div className='sm:p-4 md:p-6 lg:p-8'>
                  
                   <Navbar />
                   <Creditscore />
                   {/* <Popup /> */}
                   <Monitors />
          </div>
    </div>
  )
}

export default Calculator