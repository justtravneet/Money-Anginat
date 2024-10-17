import React from 'react'

import Navbarlogout from '../Component/Navbarlogout'
import Userdetails from '../General/Userdetails'


const Basicuserdetails = () => {
  return (
    <div>
          <div className='sm:p-4 md:p-6 lg:p-8'>
                   <Navbarlogout />
                   <Userdetails />   
          </div>
    </div>
  )
}

export default Basicuserdetails