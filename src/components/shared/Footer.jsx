import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] p-10 mx-auto'>
       <div className='flex justify-between items-center'>

  {/* Left Side */}
  <div className='flex items-center gap-2'>
    <img src={logoImg} alt="" className='w-[50px]' />
    <h2 className='text-white font-bold text-2xl'>HERO.IO</h2>
  </div>

  {/* Right Side */}
  <div className='flex flex-col gap-3 text-white'>
    <h2 className='text-white font-bold text-2xl'>Social Links</h2>
    <div className='flex gap-3'>
  <FaXTwitter size={30} />
    <FaLinkedin size={30} />
    <FaFacebook size={30} />
    </div>
  </div>

</div>
<hr className="border-t-2 border-dotted border-gray-500 my-4" />
<div>
    <small className='text-white flex items-center justify-center'>Copyright © 2025 - All right reserved</small>
</div>
</div>

    );
};

export default Footer;