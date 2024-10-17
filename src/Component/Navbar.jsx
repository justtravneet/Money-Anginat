import React from 'react'
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <section className='flex justify-between  bg-white rounded-[8px] py-[5px] px-[10px]   sm:px-[15px]  lg:px-[20px]'>
                <div className='leading-5 sm:leading-7 '>
                    <div>
                        <p className='font-bold sm:text-[20px] '>ANGINAT</p>
                    </div>

                    <div className='flex items-center gap-[4px]'>
                        <div>
                            <p className='font-bold sm:text-[20px]'>MONEY</p>
                        </div>
                        <div>
                            <img className='w-[15px]' src="Group 1.png" alt="" />
                        </div>
                    </div>

                </div>


                <div className=' flex gap-[3px] items-center p-2 '>
                         <div> <p className='text-[16px]  sm:text-[20px]'>Calculators</p></div>
                         <div>
                             <FaAngleDown />
                         </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar