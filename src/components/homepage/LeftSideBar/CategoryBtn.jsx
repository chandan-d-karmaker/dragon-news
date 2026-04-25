
import Link from 'next/link';
import React, { useState } from 'react';

const CategoryBtn = ({ item, active, handleActive }) => {
    
    return (
        <div>
            <li onClick={handleActive} className={`text-xl ${active && 'bg-[#E7E7E7]'}  rounded-sm font-medium text-center text-[#9F9F9F]`}>
                <Link href={``} className='block p-4'>{item.category_name}</Link>
            </li>
        </div>
    );
};

export default CategoryBtn;