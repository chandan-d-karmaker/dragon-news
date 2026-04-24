import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
    return (
        <div className='mt-14 mb-8'>
            <div className='flex justify-center items-center mb-5'>
                <Image src={logo} width={300} height={200} alt='logo' />
            </div>
            <h2 className='text-center text-lg text-[#706F6F] mb-2'>Journalism Without Fear or Favour</h2>
            <p className='text-center text-xl text-[#403F3F] font-medium'>
                {format(new Date(), "EEE,")} <span className='text-center text-xl text-[#706F6F] font-medium'>{format(new Date(), " MMM dd, yyyy")}</span>
            </p>
        </div>
    );
};

export default Header;