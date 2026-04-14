import React from 'react';
import bannerImg from '../../assets/images/hero.png';

const Banner = () => {
    return (
        <div className='min-h-[80vh] text-center space-y-8 pt-[50px]'>
            <h2 className='font-bold text-[#001931] text-3xl'>We Build <br /><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-[#627382] text-sm mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center gap-3'>
                <button className='btn'>Google play</button>
                <button className='btn'>App Store</button>
            </div>
            <img src={bannerImg} alt="" className='mx-auto' />
        </div>
    );
};

export default Banner;