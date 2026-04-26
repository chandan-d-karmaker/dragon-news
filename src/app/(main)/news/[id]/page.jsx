import { getNewsByCategoryId, getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export const generateMetadata = async ({params}) =>{
    const {id} = await params;
    // console.log(id)
    const news =await getNewsDetails(id);
    // console.log(news);
    
    return{
        title: news.title,
        description: news.details,
    };

}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetails(id);

    // console.log(news);

    return (
        <div className='col-span-3'>
            <Link href={'/'}>
                <button className='btn mb-5 bg-cyan-500 text-white'><IoMdArrowRoundBack /> Back</button>
            </Link>
            <div className='border border-[#E7E7E7] rounded-2xl'>

                {/* header */}
                <div className='bg-[#F3F3F3] flex justify-between items-center rounded-t-2xl p-5'>

                    <div className='flex items-center'>
                        <Image src={news.author.img} alt='author image' width={40} height={40} className='rounded-3xl'></Image>

                        <div className='ml-4'>
                            <h2 className='text-lg font-semibold'>{news.author.name}</h2>
                            <p className='text-sm'>{news.author.published_date}</p>
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <CiBookmarkPlus></CiBookmarkPlus>
                        <CiShare2 />
                    </div>

                </div>

                {/* body */}
                <div className='p-5'>
                    <h2 className='text-xl font-bold leading-8 mb-5'>{news.title}</h2>
                    <Image src={news.image_url} alt='thumbnail_url' width={700} height={200} className='mb-8' />
                    <p className='text-[16px] font-normal text-[#232222] mb-5'>{news.details}</p>

                    <hr />
                    <div className='flex justify-between mt-5'>
                        <div className='flex items-center gap-2 text-[16px] text-[#706F6F] font-medium'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />  <span>{news.rating.number}</span> </div>
                        <div className='flex items-center gap-2 text-[16px] text-[#706F6F] font-medium'><FaRegEye /> {news.total_view}</div>
                    </div>
                </div>

                {/* bottom */}
                <div className='p-4'>
                    <Link href={`/category/${news.category_id}`}>
                        <button className='btn bg-red-500 text-white font-semibold text-sm'><IoMdArrowRoundBack />All news is this section</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default NewsDetailsPage;