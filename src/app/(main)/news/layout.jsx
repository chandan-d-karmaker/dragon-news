import FindUsOn from '@/components/homepage/RightSideBar/FindUsOn';
import Login from '@/components/homepage/RightSideBar/Login';
import Qzone from '@/components/homepage/RightSideBar/Qzone';

import React from 'react';

const Detailslayout = ({ children }) => {
    return (
        <div className='grid grid-cols-4 gap-4'>

            {children}
            <div className='col-span-1 space-y-4'>
                <Login />
                <FindUsOn />
                <Qzone />
            </div>
        </div>
    );
};

export default Detailslayout;