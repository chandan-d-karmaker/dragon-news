import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const FindUsOn = () => {
    return (
        <div className=''>
            <h2 className='text-xl font-semibold mb-2'>Find us on</h2>

            <div className='flex gap-2 items-center justify-center border border-[#E7E7E7] p-2 rounded-sm rounded-b-none'> <FaFacebook />Facebook</div>
            <div className='flex gap-2 items-center justify-center border border-[#E7E7E7] p-2'> <FaGoogle />Google</div>
            <div className='flex gap-2 items-center justify-center border border-[#E7E7E7] p-2 rounded-sm rounded-t-none'> <FaTwitter />Twitter</div> 

        </div>
    );
};

export default FindUsOn;