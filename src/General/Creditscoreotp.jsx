import React from 'react'
import { PiShieldCheckThin   } from "react-icons/pi";
import { HiOutlinePhoneXMark } from "react-icons/hi2";

import Otpauthentication from './Otpauthentication';

const Creditscoreotp = () => {
    return (

        <div>
            <div className='grid sm:grid-cols-2 gap-[20px] sm:gap-8 mt-[40px]'>
                <div className='w-full h-[auto] flex flex-col justify-between '>
                    <div>
                        <p className='text-[28px]  sm:text-[30px] lg:text-[36px]'>Check your </p>
                        <p className='text-[28px] font-bold  sm:text-[30px] lg:text-[36px]'>credit score</p>
                        <p className='text-[28px]   sm:text-[30px] lg:text-[36px]'>for free</p>
                    </div>

                    <div className=' flex ' >
                        <div className=' w-[full] h-[50px]  flex items-center  gap-[15px] '>
                            <div className='flex items-center gap-[8px]'>
                                <div><PiShieldCheckThin size={20} /></div>
                                <div><p className='font-bold text-[10px]'>Powered by</p></div>
                                <div><img className='w-[40px]' src="https://s3-alpha-sig.figma.com/img/4b03/47a3/ffda9af5c13062617b86e3ad8d75462e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ed5OQXG49FBY4ODkkrdVGTCSviyLgPl67Zh107TZarvIqPuHAqBZ94I2B48Pnc7y2AfPxIr49r7wvfGGTMo36vRCJrgAKdtBjOxB5uVHBoB8K~RguGGR2tJUWINS8XTFxCMSXssTEYjDvDc7v-QJgCrSH0iKW3oz9zKNKMGA9ilKfeXCctpO6J8O3Qj3N82Nm4IK9DVqrx-wJLrCxOk3jneH0iKYSmu~UV0jA-K-~BBrBZAc39D2GkZL0BcWH6Sfd2S0ZFxCo4GcQSzgLF1bd8ZX~5v1Xn-23SpSBE5D3ELgCO7GPX9HPogJLlGIwRI1JECS4o8bFOjUPO0rtLCwHg__" alt="" /></div>
                            </div>

                            <div>
                                |
                            </div>

                            <div className='flex items-center gap-[8px]'>
                                 <div><HiOutlinePhoneXMark size={16}  /></div>
                                 <div><p className='font-bold text-[10px]'>No Spam Calls</p></div>
                            </div>
                        </div>

                    </div>


                    <div>
                        
                        <Otpauthentication />
                    </div>

                </div>
                <div className='w-full h-[auto] flex justify-center sm:justify-end '>
                    <div className='w-[300px] sm:w-[366px]' >
                        <img src="https://s3-alpha-sig.figma.com/img/a9dd/1d91/f71a5f930c1f25bf9c13da394f9490b5?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TWxKWF1Y58xNOwCd57xVO5KpXIg076bqq2wRQY~UXHOXmdzp~~TUnBZPAhWPH87Fru-G6GdDYvk8Kkkrq9HAX0OLVaYKMyJwSgbMoKaNgYMnoHXTvT6nMZGyDKivi6c78-ND2EuR4~0-QV8Q33CKMJ4z5WrBb650ToGo25EssqNaenj8hNCji2i3NvlvafzY-4sZJqG6N4MNbCujCoLu84qJlbEizqm5cPV3UYr4CtV1~O9xb33~zLlfHN-MOIaXFYQM8Biz9RSxhzC6UBobfVhH0KHJSTIFIxCPeebvL0IAeNGXsWVI05A3K6ZpXvCvyPmctXA1khns~87j0Sm8Hg__" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Creditscoreotp 