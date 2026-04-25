import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

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
                <Image src={item.thumbnail_url} alt='thumbnail_url' width={500} height={200} className='mb-8' />
                <p className='text-[16px] font-normal text-[#706F6F] mb-5 line-clamp-3'>{item.details}</p>
                <Link href={`/news/${item._id}`}>
                    <button className='btn mb-5'>Read more</button>
                </Link>
                <hr />
                <div className='flex justify-between mt-5'>
                    <div className='flex items-center gap-2 text-[16px] text-[#706F6F] font-medium'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />  <span>{item.rating.number}</span> </div>
                    <div className='flex items-center gap-2 text-[16px] text-[#706F6F] font-medium'><FaRegEye /> {item.total_view}</div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;