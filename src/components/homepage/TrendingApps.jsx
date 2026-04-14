import React, { use, useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../ui/AppCard';
import { HashLoader } from 'react-spinners';
import UseApps from '../../hooks/useApps';




const TrendingApps = () => {

    const {apps, loading} = UseApps();
        // console.log(apps, 'my apps');
        // console.log(loading, 'data loading');

    return (
        <div className='container mx-auto my-[60px]'>

            {/* section header */}
            <div className='mt-10 mb-10 text-center'>
                <h2 className='font-bold text-4xl text-[#001931] '>Trending Apps</h2>
            <p className='text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>


         {
            loading ? (
               <div className='flex justify-center items-center'>
                <HashLoader color='#9F62F2'></HashLoader>
                </div>
            ) : (
                 <div className='grid grid-cols-3 gap-5'>
                {
            apps.slice(0, 9).map((app, index) => {
            return (
                <AppCard key={index} app={app}></AppCard>
                )
            })}

            
          </div> 
            )
         }
         <div className='text-center mt-4'>
                <Link to={'/apps'}>
                <button className='btn bg-[#9F62F2] text-white'>View All</button>
                </Link>
            </div>
       
        </div>
    );
};

export default TrendingApps;