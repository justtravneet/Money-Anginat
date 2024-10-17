import React, { useState } from 'react';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Manually = () => {
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();

const handleSubmit = (e) => {
  
    navigate('/UserDetails');
    setFirstName('');
};




    return (
        <form action={handleSubmit} >
            <div className='w-[100%] h-[100%]  flex items-center justify-center mt-[80px]'>
                <div className='flex flex-col justify-between  w-[470px] h-[170px]  p-2 ' >
                    <div>
                        <Input
                            className='p-2 text-[18px]' placeholder="Pan Card Number" />
                    </div>

                    <div>
                        <button className='border w-full rounded-[8px] p-2 button'><p className='text-[18px] text-white font-semibold'>Yes this is my PAN</p></button>
                    </div>

                    <div>
                        <button type="submit" className='border-2 w-full rounded-[8px] p-2 '><p className='text-[18px] font-semibold'>Enter Manually</p></button>
                    </div>







                </div>
            </div>
        </form>
    )
}

export default Manually