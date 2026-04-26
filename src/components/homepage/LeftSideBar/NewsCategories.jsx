'use client'
import React, { useState } from 'react';
import CategoryBtn from './CategoryBtn';

const NewsCategories = ({ categories, activeId }) => {
    const [active, setActive] = useState(false);
    const handleActive = ()=>{
        setActive(!active);
    }

    return (
        <div>
            <ul className="flex flex-col gap-2">
                {
                    categories.map(item => <CategoryBtn key={item.category_id} item={item} handleActive={handleActive} active={activeId} />)
                }
            </ul>
        </div>
    );
};

export default NewsCategories;