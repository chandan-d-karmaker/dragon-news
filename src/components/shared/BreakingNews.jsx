import React from 'react';
import Marquee from 'react-fast-marquee';

const newsHeadlines = [
  {
    id: 1,
    category: "TECH",
    title: "New Quantum Processor reaches milestone in error correction.",
    link: "/news/tech-quantum"
  },
  {
    id: 2,
    category: "MARKETS",
    title: "Global indices surge as inflation data hits 3-year low.",
    link: "/news/market-update"
  },
  {
    id: 3,
    category: "WORLD",
    title: "Historic climate summit concludes with new renewable energy pact.",
    link: "/news/climate-summit"
  },
  {
    id: 4,
    category: "SCIENCE",
    title: "Mars Rover discovers ancient organic molecules in river delta.",
    link: "/news/mars-discovery"
  },
  {
    id: 5,
    category: "LIFESTYLE",
    title: "Remote work trends: Why the '4-day week' is gaining momentum.",
    link: "/news/remote-work"
  }
];

const BreakingNews = () => {
    return (
        <div className='p-4 bg-[#F3F3F3] mb-6'>

            <div className='flex gap-4 items-center'>

                <div className='bg-[#D72050] px-6 py-2'>
                    <h2 className='text-white'>Latest</h2>
                </div>
                <div className=''>
                    <Marquee pauseOnHover='true'>
                       {
                        newsHeadlines.map(news => <p key={news.id} news={news}>
                            {<span className='font-bold mr-1'> {news.category}: </span>}
                            {news.title}
                        </p>)
                       }
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;