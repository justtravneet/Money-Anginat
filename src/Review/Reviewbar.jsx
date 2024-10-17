import React from 'react'
import Arc from './Meter/Arc'


const Reviewbar = () => {
    return (
        <div>
            <div>
                <div className='w-[100%] h-[100%] flex items-center justify-center '>

                    <div className='  w-[700px] h-[818px] border rounded-[10px] bg-white px-[20px] py-[05px] sm:px-[30px] lg:px-[60px]'>

                        <div className='flex items-center gap-[05px]'>
                            <div><p className='text-[12px]'>Powered by</p></div>
                            <div><img className='w-[45px]' src="cibil.png" alt="" /></div>
                        </div>

                        <div>
                            <div className='flex justify-center'>
                                <div>
                                    <div className=''>
                                        <Arc />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <div className='flex justify-between'>
                                <div><p className='text-[15px] font-semibold'>Tips to build a great score</p></div>
                                <div><a href="http://"> <p className='text-[14px] font-semibold underline'>View all</p></a></div>
                            </div>

                        </div>






                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviewbar