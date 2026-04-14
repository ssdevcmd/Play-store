import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <div>
             <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
      <figure>
      <img
      src={app.image} className='w-auto h-[200px]'
      alt={app.title} />
     </figure>
    <div className="card-body">
    <h2 className="card-title">{app.title}</h2>
    <div className='flex justify-between items-center gap-4'>
        <span className='text-[#00D390] flex items-center gap-1 py-1 px-2 font-semibold rounded-md'><FaDownload></FaDownload> {app.downloads}</span>
        <span className='text-[#FF8811] flex items-center gap-1 py-1 px-2 font-semibold rounded-md'><FaStar></FaStar>{app.ratingAvg}</span>
    </div>
   
    </div>
</Link>
        </div>
    );
};

export default AppCard;