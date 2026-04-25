import Image from 'next/image';
import React from 'react';

const NewsCard = ({item}) => {
    return (
        <div>
            {/* header */}
            <div className='bg-[#F3F3F3]'>
                <Image src={item.author.img} alt='author image' width={40} height={40}></Image>
                <div>
                    <h2>{item.author.name}</h2>
                    <p>{item.published_date}</p>
                </div>

            </div>
            
        </div>
    );
};

export default NewsCard;