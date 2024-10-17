import React from 'react'

const Monitors = () => {
    return (
        <div>
            <div className='mt-[50px] flex flex-col gap-[20px]'>
                <div>
                    <p className='text-[20px] sm:text-[23px] lg:text-[28px] font-bold'>Why should I monitor my credit score?</p>
                </div>

                <div className='grid sm:grid-cols-2 gap-[8px]'>
                    <div className=' section-1 w-[full] h-[300px] bg-gray-100 rounded-[15px]'>
                        <div>
                            <p className='text-center p-4 font-bold text-[20px] sm:text-[24px]'>Monthly free credit report</p>
                        </div>
                    </div>
                    <div className=' section-2 w-[full] h-[300px] bg-gray-200 rounded-[15px]'>
                        <p className='text-center p-4 font-bold text-[20px]'>Detailed analysis of factors affecting your credit score</p>
                    </div>
                    <div className=' section-1 w-[full] h-[300px] bg-gray-300 rounded-[15px]'>
                        <p className='text-center p-4 font-bold text-[20px]'>Personalized tips on improving & building score</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monitors