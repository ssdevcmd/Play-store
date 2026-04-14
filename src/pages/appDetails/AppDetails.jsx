import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { HashLoader } from 'react-spinners';
import { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams();
    console.log(id, 'id');

     const {apps, loading} = useApps();

     const expectedApp = apps.find((app) => String(app.id) === id);

     const {installedApps, setInstalledApps} = useContext(InstalledAppsContext);


     console.log(apps,'app', loading, 'loading');
     console.log(expectedApp, 'expectedApp');

     if(loading) {
        return (
             <div className='flex justify-center items-center h-[60vh]'>
                <HashLoader color='#9F62F2'></HashLoader>
                </div>
        )
     }

     const handleInstallApp = () => {
        setInstalledApps([...installedApps, expectedApp]);
        toast.success(`${expectedApp.title} is installed`)
     }
    return (
        <div className='container mx-auto'>
          <div className='shadow p-6 space-y-2 text-center'>
              <img src={expectedApp.image} alt="" className='mx-auto w-auto h-[200px]' />
            <h2 className='font-semibold text-3xl'>{expectedApp.title}</h2>
            <p>Developed by: {''}
            <span className='font-semibold text-3xl text-purple-500'>{expectedApp.companyName}</span>
             </p>
       <button onClick={handleInstallApp} className='btn bg-purple-500 text-white'>Install Now</button>
          </div>
        </div>
    );
};

export default AppDetails;