import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* Dynamic */}
            <Outlet></Outlet>
            
            <Footer></Footer>

            {/* Toast Container */}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RootLayout;