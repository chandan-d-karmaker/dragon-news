'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const CategoryBtn = ({ item }) => {
    const [active, setActive] = useState('');
    const handleActive = (id)=>{
        setActive(id);
    }
    return (
        <div>
            <li onClick={()=> handleActive(item.category_id)} className={`text-xl ${active === item.category_id && 'bg-[#E7E7E7]'}  rounded-sm font-medium text-center text-[#9F9F9F]`}>
                <Link href={``} className='block p-4'>{item.category_name}</Link>
            </li>
        </div>
    );
};

export default CategoryBtn;