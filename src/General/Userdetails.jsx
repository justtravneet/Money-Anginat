import React, { useState } from 'react';
import { Input, message } from 'antd';
import Reviewbar from '../Review/Reviewbar';




const Userdetails = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [conditionsAccepted, setConditionsAccepted] = useState(false);


    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            message.error('Please enter a valid email address.');
            return;
        }

        if (!termsAccepted || !conditionsAccepted) {
            message.error('You must accept the terms and conditions to proceed.');
            return;
        }

        message.success("User details Registered");




        setFirstName('');
        setLastName('');
        setEmail('');
        setTermsAccepted(false);
        setConditionsAccepted(false);
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='w-[100%] h-[100%] flex items-center justify-center mt-[80px]'>
                        <div className='flex flex-col justify-between w-[470px] h-[470px] p-2'>
                            <div>
                                <p className='text-[20px] font-bold'>Free Credit Score</p>
                            </div>

                            <div className='flex flex-col gap-[8px]'>
                                <div>
                                    <span><p className='text-[14px]'>Few Basic Details</p></span>
                                    <Input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                        className='p-3 text-[18px]' placeholder="First name" />
                                </div>

                                <div>
                                    <Input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                        className='p-3 text-[18px]' placeholder="Last name" />
                                </div>

                                <div>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className='p-3 text-[18px]' placeholder="Email address" />
                                </div>
                            </div>

                            <div className='flex flex-col gap-[5px]'>
                                <div className='flex'>
                                    <div className='w-[10%] h-[auto] flex items-center'>
                                        <input
                                            className='w-[100%] sm:h-[18px]'
                                            type="checkbox"
                                            checked={termsAccepted}
                                            onChange={(e) => setTermsAccepted(e.target.checked)}
                                        />
                                    </div>
                                    <div className='w-[90%] h-[auto]'>
                                        <p className='text-[11px] sm:text-[12px]'>I declare the above information is correct and true. I allow Anginatapp Innovations (P) LTD to be my authorized representative & fetch my credit information from CIBIL / Experian / Equifax</p>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='w-[10%] h-[auto] flex items-center'>
                                        <input
                                            className='w-[100%] sm:h-[18px]'
                                            type="checkbox"
                                            checked={conditionsAccepted}
                                            onChange={(e) => setConditionsAccepted(e.target.checked)}
                                        />
                                    </div>
                                    <div className='w-[90%] h-[auto]'>
                                        <p className='text-[11px] sm:text-[12px]'>I declare the above information is correct and true. I allow Anginatapp Innovations.</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className='border w-full rounded-[5px] p-2 button'>
                                    <p className='text-[18px] text-white font-semibold'>Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            

            <div>
                  <Reviewbar />
            </div>


        </div>

    );
}

export default Userdetails;
