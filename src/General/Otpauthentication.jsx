import React, { useState, useEffect } from 'react';
import { Input, message, Spin } from 'antd';
import { useNavigate } from 'react-router-dom'; 

const Otpauthentication = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const validOtp = '123456';

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleCheckScore = () => {
    if (otp === validOtp) {
      message.success('OTP is valid! Checking score...');
      
    } else {
      message.error('Invalid OTP. Please try again.');
    }

    navigate('/details');
  };

  const handleResendOtp = () => {
    if (isTimerActive) return;
    setIsResending(true);
    setIsTimerActive(true);
    setTimer(30);

    setTimeout(() => {
      message.success('OTP has been resent!');
      setIsResending(false);
    }, 2000);
  };

  useEffect(() => {
    let interval = null;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  return (
    <div className='flex flex-col gap-[10px]'>
      <div className=''>
        <div className='flex w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-[5px] h-[40px] md:h-[50px]'>
          <div className='w-[60%] h-[40px] md:h-[50px]'>
            <input
              className='otpinput w-[100%] h-[100%] mb-[0px]'
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              type="text"
            />
          </div>
          <div className='w-[40%] h-[40px] md:h-[50px]'>
            <div className='flex justify-center w-[100%] h-[100%] items-center'>
              {isResending ? (
                <Spin size="small" />
              ) : (
                <span
                  className={`text-blue-500 cursor-pointer ${isTimerActive ? 'opacity-50' : ''}`}
                  onClick={handleResendOtp}
                >
                  <p className='text-[12px] md:text-[14px] font-medium text-black'>Resend OTP</p>
                </span>
              )}
              {isTimerActive && (
                <span className='ml-2 text-[13px] md:text-[14px] text-gray-500'>{`(${timer}s)`}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]'>
        <div>
          <p className='text-[13px] md:text-[15px] font-medium'>+91 987342421</p>
        </div>
        
        <div>
          <p 
            className='text-[13px] md:text-[15px] font-medium mr-2 cursor-pointer' 
            onClick={() => navigate(-1)} 
          >
            Edit
          </p>
        </div>
      </div>

      <div className='w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] bg-gray-200 rounded-[5px] h-[40px] md:h-[50px]'>
        <button
          type="button"
          className='border w-full rounded-[5px] p-2 button w-[100%] h-[100%]'
          onClick={handleCheckScore}
        >
          <p className='text-[15px] text-white font-semibold'>Submit</p>
        </button>
      </div>
    </div>
  );
}

export default Otpauthentication;
