import React, { useState } from 'react';
import { Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const PhoneAuthentication = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
      setError('');
    } else {
      setError('Phone number must contain only digits and be up to 10 digits long.');
    }
  };

  const handleSubmit = () => {
    if (phone.length < 10) {
      setError('Phone number must be exactly 10 digits long.');
      return;
    }


    message.success(`OTP sent to +91 ${phone}`);

    navigate('/otp');
  };

  return (
    <div>
      <div className='flex flex-col gap-[8px]'>
        <div className=' w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white  rounded-[5px] h-[40px] md:h-[50px]'>
          <div className='flex '>
            <div className='flex gap-[5px] justify-center items-center border-r-2 w-[20%] h-[40px] md:h-[50px] '>
              <div className='flex justify-center items-center '><p className='opacity-50'>+91 </p></div>

            </div>

            <div className='w-[80%] h-[40px] md:h-[50px]'><input className='otpinput w-[100%] h-[100%] mb-[0px]'
              placeholder="Phone Number"

              value={phone}
              onChange={handleInputChange}

              type="text" />
            </div>
          </div>

        </div>
        {error && <p className='text-red-500 text-[12px]'>{error}</p>}
        <p className='text-[11px] sm:text-[13px]'>An OTP will be sent for verification</p>

        <div className=' w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-gray-200 rounded-[5px] h-[40px] md:h-[50px]'>
            <button
              type="button"
              className='border w-full rounded-[5px] p-2 button w-[100%] h-[100%]'
              onClick={handleSubmit}
            >
              <p className='text-[15px] text-white font-semibold'>Submit</p>
            </button>
          </div>


      </div>


      {/* <div className='flex flex-col gap-[8px]'>
        <div className='flex items-center'>
          <Input
            className='w-[250px] p-2 sm:w-[250px] lg:w-[300px] text-[16px]'
            placeholder="Phone Number"
            prefix="+91"
            value={phone}
            onChange={handleInputChange}
          />
          
        </div>

        {error && <p className='text-red-500 text-[11px]'>{error}</p>}
        <p className='text-[11px]'>An OTP will be sent for verification</p>

        <div className='w-[250px] sm:w-[250px] lg:w-[300px] text-[16px]'>
          <button
            type="button"
            className='border w-full rounded-[5px] p-2 button'
            onClick={handleSubmit}
          >
            <p className='text-[15px] text-white font-semibold'>Check score</p>
          </button>
        </div>
      </div> */}

    </div>
  );
};

export default PhoneAuthentication;
