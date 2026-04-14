import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import useApps from '../../hooks/useApps';

const Dashboard = () => {

     const {installedApps} = useContext(InstalledAppsContext);
     const {apps} = useApps();
     console.log(apps, 'appsss');

     const uninstalledAppsLength = apps.length - installedApps.length;
     console.log('Number of uninstalled apps:',uninstalledAppsLength, 'number of installed apps:' ,installedApps.length);

    const data =[
        {name: 'Installed', value:installedApps.length, fill: '#0088FE'},
        {name: 'Uninstalled', value:uninstalledAppsLength , fill: '#00C49F'},
    ]
    return (
        <div className='my-10 shadow p-10 rounded-md border-slate-300 container mx-auto'>
            <h2 className='font-semibold text-3xl mb-16 text-center'>Installed and Uninstalled Apps</h2>
              <PieChart
               style={{
                 width: '100%',
                 maxWidth: '500px',
                 maxHeight: '80vh',
                 margin: 'auto',
                 aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
        </div>
    );
};

export default Dashboard;