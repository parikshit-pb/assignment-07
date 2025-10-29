import React from 'react';
import backgroundImg from '../../assets/vector1.png'

const BannerItem = ({inProgress, resolved}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1500px] mx-auto bg-base-200 gap-4 place-items-center
'>
    <div className="bg-green-500 banner-1 max-w-[580px] h-auto bg-gradient-to-r from-[#422AD5] to-[#9a5af5] py-[60px] w-full relative">
    
      <img className='absolute top-0 left-0' src={backgroundImg} alt="" />
      <img className='absolute top-0 right-0 scale-x-[-1] ' src={backgroundImg} alt="" />
     
    <p className='text-white text-center'>In-Progress</p>
    <p className='text-white font-bold text-3xl text-center'>{inProgress}</p>
  </div>

  <div className="banner-2 max-w-[580px] h-auto bg-gradient-to-r from-[#00D100] to-[#008000] py-[60px] relative w-full">
    
      <img className='absolute top-0 left-0' src={backgroundImg} alt="" />
      <img className='absolute top-0 right-0 scale-x-[-1] ' src={backgroundImg} alt="" />
     
    <p className='text-white text-center'>Resolved</p>
    <p className='text-white font-bold text-3xl text-center'>{resolved}</p>
  </div>
</div>
    );
};

export default BannerItem;