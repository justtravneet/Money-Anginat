import React from 'react'

import Navbarlogout from '../Component/Navbarlogout'
import Pancarddetails from '../General/Pancarddetails'



const  Pancarduserdetails = () => {
  return (
    <div>
          <div className='sm:p-4 md:p-6 lg:p-8'>
                   <Navbarlogout />
                   <Pancarddetails />
          </div>
    </div>
  )
}

export default Pancarduserdetails