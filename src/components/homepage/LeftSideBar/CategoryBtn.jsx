
import Link from 'next/link';
import React from 'react';

const CategoryBtn = ({ item, active, handleActive }) => {
    
    return (
        <div>
            <li onClick={handleActive} className={`text-xl ${active && 'bg-[#E7E7E7]'}  rounded-sm font-medium text-center text-[#9F9F9F]`}>
                <Link href={`/category/${item.category_id}`} className='block p-4'>{item.category_name}</Link>
            </li>
        </div>
    );
};

export default CategoryBtn;