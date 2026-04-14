import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  h-[40vh] font-bold text-4xl text-white text-center items-center justify-center'>
            <h2 className='py-10'>Trusted By Millions, Built For Yoy</h2>
            <div className='flex justify-between gap-3 mx-auto'>
                <div className=''>
                <p className='text-xs opacity-80'>Total Downloads</p>
                <h2 className='text-4xl font-bold'>29.6M</h2>
                <p className='text-xs opacity-80'>21% more than last month</p>
            </div>
            <div className=''>
                <p className='text-xs opacity-80'>Total Reviews</p>
                <h2 className='text-4xl font-bold'>906K</h2>
                <p className='text-xs opacity-80'>46% more than last month</p>
            </div>
            <div className=''>
                <p className='text-xs opacity-80'>Active Apps</p>
                <h2 className='text-4xl font-bold'>132+</h2>
                <p className='text-xs opacity-80'>31 more will Launch</p>
            </div>
            </div>
            
        </div>
    );
};

export default Stats;