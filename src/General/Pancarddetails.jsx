import React, { useState } from 'react';
import { Button, Input } from 'antd';


const Pancarddetails = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
  

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return regex.test(email);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`First Name: ${firstName}, Last Name: ${lastName},Email: ${email}`);

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        
   

        setFirstName('');
        setLastName('');
        setEmail('');
    };

    return (
        <form action={handleSubmit}>
        <div className='w-[100%] h-[100%]  flex items-center justify-center mt-[80px]'>
            <div className='flex flex-col justify-between w-[470px] h-[433px]  p-2 ' >
                <div>
                    <p className='text-[20px] font-bold'>PAN Card details</p>
                </div>

                <div className='flex flex-col gap-[8px]'>

                    <div>
                       
                        <Input 
                         type="text"
                         value={firstName}
                         onChange={(e) => setFirstName(e.target.value)}
                         required
                        className='p-3 text-[18px]' placeholder="PAN card Number" />
                    </div>

                    <div>
                        <Input 
                         type="text"
                         value={lastName}
                         onChange={(e) => setLastName(e.target.value)}
                         required
                        className='p-3 text-[18px]' placeholder="Date of Birth" />
                    </div>

                    <div>
                        <Input
                         type="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                        className='p-3 text-[18px]' placeholder="Pin Code " />
                        <span><p className='text-[14px] ml-[15px]'>Current residentail details</p></span>
                    </div>
                </div>

                <div className='flex flex-col gap-[5px]'>
                       <div><p className='font-bold text-[18px]'>Gender</p></div>

                       <div className='flex gap-[10px] w-[50%]'>
                                <Button className='   px-[15px] py-[8px] border-2 rounded-[5px] flex items-center'>
                                <p className=''>Male</p>
                                </Button>
                                <Button className='   px-[15px] py-[8px] border-2 rounded-[5px] flex items-center'>
                                <p className=''>female</p>
                                </Button>
                                <Button className='   px-[15px] py-[8px] border rounded-[5px] flex items-center'>
                                <p className=''>other</p>
                                </Button>
                              
                               

                       </div>

                </div>


               

                <div>
                 
                   
                    <button type="submit" className='border w-full rounded-[8px] p-2 button'><p className='text-[18px] text-white font-semibold'>Check credit score</p></button>
               
                </div>

            </div>
        </div>
        </form>
    )
}

export default Pancarddetails