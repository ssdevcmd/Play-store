import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import AppCard from '../../components/ui/AppCard';
import UseApps from '../../hooks/useApps';

const Apps = () => {
      const {apps, loading} = UseApps();
           console.log(apps, loading);
    return (
        <div className='container mx-auto my-10 mb-10'>
             {/* section header */}
            <div className='mt-10 mb-10 text-center max-w-[50%] mx-auto'>
             <h2 className='font-bold text-4xl text-[#001931] '>Our All Applications</h2>
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
            apps.map((app, index) => {
            return (
                <AppCard key={index} app={app}></AppCard>
                )
            })}

            
          </div> 
            )
         }

            
          </div> 

    );       

};

export default Apps;