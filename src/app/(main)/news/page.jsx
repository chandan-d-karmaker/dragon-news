import NewsCard from '@/components/shared/NewsCard';
import React from 'react';

const NewsSection = ({news}) => {
    return (
        <div>
            {
                news.map(item => <NewsCard key={item._id} item={item}></NewsCard>)
            }
        </div>
    );
};

export default NewsSection;