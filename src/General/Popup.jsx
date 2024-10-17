import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { BsHeartPulse } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { AiOutlineGold, AiOutlineHome } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const Popup = () => {
    const [checkboxes, setCheckboxes] = useState({
        healthInsurance: false,
        creditCard: false,
        vehicleInsurance: false,
        digitalGold: false,
        homeLoan: false,
        personalLoan: false,
        fixedDeposit: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes(prev => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = () => {
        const isAnyChecked = Object.values(checkboxes).some(checked => checked);
        if (!isAnyChecked) {
            alert('Please select at least one option before submitting.');
            return;
        }
        
        console.log('Submitted:', checkboxes);
    };

    return (
        <div>
            <div className='fixed inset-0 bg-opacity-30 backdrop-blur-[1px] flex justify-center'>
                <div className='w-[100%] h-[100%] flex items-center justify-center p-3'>
                    <div className='w-[370px] h-[420px] bg-white rounded-[10px]'>

                        <div className='p-6 rounded-[10px] flex flex-col h-[100%] justify-between'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div><p className='text-[17px] font-semibold'>We have exciting offers </p></div>
                                    <div><RxCross2 size={20} /></div>
                                </div>
                                <div><p className='text-[12px]'>Select products that might interest you</p></div>
                            </div>

                            <div className='flex flex-col gap-[8px]'>
                                {Object.keys(checkboxes).map((key, index) => {
                                    const icons = {
                                        healthInsurance: <BsHeartPulse className='opacity-75' size={18} />,
                                        creditCard: <CiCreditCard1 className='opacity-75' size={19} />,
                                        vehicleInsurance: <IoCarOutline className='opacity-75' size={19} />,
                                        digitalGold: <AiOutlineGold className='opacity-75' size={19} />,
                                        homeLoan: <AiOutlineHome className='opacity-75' size={19} />,
                                        personalLoan: <CiWallet className='opacity-75' size={19} />,
                                        fixedDeposit: <HiOutlineCurrencyRupee className='opacity-75' size={19} />,
                                    };

                                    return (
                                        <div key={index} className='flex justify-between items-center'>
                                            <div className='flex gap-[10px] items-center'>
                                                <div>{icons[key]}</div>
                                                <div><p className='text-[12px] opacity-75 mb-[3px]'>{key.replace(/([A-Z])/g, ' $1')}</p></div>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    name={key}
                                                    checked={checkboxes[key]}
                                                    onChange={handleCheckboxChange}
                                                    className='w-[20px] h-[15px] rounded-[40px] mb-[0px]'
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='w-[100%]'>
                                <button
                                    className='button-2 w-[100%] rounded-[5px] text-white'
                                    onClick={handleSubmit}
                                >
                                    <p>Submit</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
