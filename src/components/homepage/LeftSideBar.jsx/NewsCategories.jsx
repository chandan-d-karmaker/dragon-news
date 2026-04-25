import React from 'react';
import CategoryBtn from './CategoryBtn';

const NewsCategories = ({ categories }) => {

    return (
        <div>
            <ul className="flex flex-col gap-4">
                {
                    categories.map(item => <CategoryBtn key={item.category_id} item={item} activeId={item.category_id} />)
                }
            </ul>
        </div>
    );
};

export default NewsCategories;