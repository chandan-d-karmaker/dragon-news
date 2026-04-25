import Image from 'next/image';
import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ item }) => {
    return (
        <div className='border border-[#E7E7E7] rounded-2xl'>
            {/* header */}
            <div className='bg-[#F3F3F3] flex justify-between items-center rounded-t-2xl p-5'>

                <div className='flex items-center'>
                    <Image src={item.author.img} alt='author image' width={40} height={40} className='rounded-3xl'></Image>

                    <div className='ml-4'>
                        <h2 className='text-lg font-semibold'>{item.author.name}</h2>
                        <p className='text-sm'>{item.author.published_date}</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <CiBookmarkPlus></CiBookmarkPlus>
                    <CiShare2 />
                </div>

            </div>

            {/* body */}
            <div className='p-5'>
                <h2 className='text-xl font-bold leading-8 mb-5'>{item.title}</h2>
                <Image src={item.thumbnail_url} alt='thumbnail_url' width={500} height={200} className='mb-8'/>
                <p className='text-[16px] font-normal text-[#706F6F]'>{item.details}</p>
            </div>

        </div>
    );
};

export default NewsCard;