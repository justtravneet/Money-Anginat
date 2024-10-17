import { useState } from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Calculator from './Pages/Calculator'
import Basicuserdetails from './Pages/Basicuserdetails';

import Calculatorotp from './Pages/Calculatorotp';


function App() {


  return (
    <>
      <div className='background'>
          <BrowserRouter>
          <Routes>
             
              <Route path='/' element={<Calculator/> } />
              <Route path='/otp' element={<Calculatorotp />} />
              <Route path='/Details' element={ <Basicuserdetails />} />
            
              
              


          </Routes>
          
         
          </BrowserRouter> 
          
          
          
          
          
      </div>


    </>
  )
}

export default App
