import React from 'react';
import { Link } from 'react-router';
import ErrorImg from '../../assets/images/error-404.png';
const NotFoundPage = () => {
    return (
        <div>
    <div className='flex flex-col items-center justify-center min-h-screen text-center gap-4'>
        <img src={ErrorImg} alt="error" className='' />
      <h1 className='text-2xl font-bold text-[#001931]'>OPPS!App Not Found</h1>
      <p className='text-[#627382]'>The App you are requesting is not found on our system. please try another apps</p>
      <Link to="/">
      <button className='btn bg-purple-500 text-white'>Go Back</button>
      </Link>
    </div>

        </div>
    );
};

export default NotFoundPage;