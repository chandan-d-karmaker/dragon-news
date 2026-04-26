import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const Authlayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default Authlayout;              