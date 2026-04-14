import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';

const InstallApps = () => {
    
    const { installedApps , setInstalledApps } = useContext(InstalledAppsContext);
    
    console.log(installedApps);

    const handleUninstall = (app) => {
        console.log(app, 'i am uninstall');

        const restApps = installedApps.filter((iApp) => iApp.id != app.id);
        console.log(restApps);

        setInstalledApps(restApps);
        toast.warning(`${app.title} is uninstalled!`)
    }

    return (
        <div className='container mx-auto my-10'>
            {installedApps.length === 0 ? (
                <h2 className='font-bold text-4xl text-center my-5'>No installed apps found!</h2>
            ) : (
                installedApps.map((app, index) => {
                    return <div key={index} className='flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4'>
                <div>
                    <img src={app.image} alt="" className='w-auto h-[120px]'/>
                    <h2 className='font-semibold text-2xl'>{app.title}</h2>
                    </div>
                     <button onClick={() => handleUninstall(app)} className='btn bg-red-500 text-white'>Uninstall</button>
                    </div>
                })
            )}
        </div>
    );
};

export default InstallApps;