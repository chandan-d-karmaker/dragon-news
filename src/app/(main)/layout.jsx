import FindUsOn from '@/components/homepage/RightSideBar/FindUsOn';
import Login from '@/components/homepage/RightSideBar/Login';
import Qzone from '@/components/homepage/RightSideBar/Qzone';
import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BreakingNews/>
            <Navbar />
            
            {children}
        </div>
    );
};

export default Mainlayout;