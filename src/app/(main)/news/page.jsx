import NewsCard from '@/components/shared/NewsCard';
import React from 'react';

const NewsSection = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-4'>
            {
                news?.map(item => <NewsCard key={item._id} item={item}></NewsCard>)
            }
        </div>
    );
};

export default NewsSection;