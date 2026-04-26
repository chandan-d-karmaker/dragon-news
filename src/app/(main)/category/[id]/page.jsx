import NewsCategories from '@/components/homepage/LeftSideBar/NewsCategories';
import FindUsOn from '@/components/homepage/RightSideBar/FindUsOn';
import Login from '@/components/homepage/RightSideBar/Login';
import Qzone from '@/components/homepage/RightSideBar/Qzone';
import React from 'react';
import NewsSection from '../../news/page';
import { getCategories, getNewsByCategoryId } from '@/lib/data';


const NewsCategoryPage = async ({ params }) => {
    const {id} = await params;
    
    console.log('params: ',id);

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);
    console.log(news);

    return (
        <div className="grid grid-cols-4 gap-4">

            <div className="">
                <h2 className="text-xl font-semibold text-[#403F3F] mb-5">All categories</h2>
                <NewsCategories categories={categories} activeId={id} />
            </div>
            <div className="text-xl font-semibold text-[#403F3F] mb-5 col-span-2">
                <NewsSection news={news.data}/>
            </div>
            <div className="space-y-4">
                <Login />
                <FindUsOn />
                <Qzone />
            </div>
        </div>
    );
};

export default NewsCategoryPage;