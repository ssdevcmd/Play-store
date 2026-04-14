import React, { useEffect, useState } from 'react';

// step 1
// const appsPromise = fetch('/data.json').then(res => res.json());

// this is custom hook

const useApps = () => {
    const [apps, setApps] = useState([]);
            // to show when data loading
      const [loading, setLoading] = useState(true);
    
      useEffect ( () => {
      const fetchData = async () => {         const res = await fetch('/data.json'); const data = await res.json();
      console.log(data);
    
    
      //a function to set the time of data loading
     setTimeout(() =>{
       setApps(data);
        setLoading(false);
         }, 1500);
                
             };
       fetchData()
           }, [] );
    return {apps, loading}
};

export default useApps;