import React, { use } from 'react';
import cardIcon from '../../assets/Vector-icon.png'

const CardItem = ({cardPromise}) => {
    const cardData = use(cardPromise)
    console.log(cardData)
    return (
        <div className='max-w-[1500px] mx-auto bg-base-200 border-2 border-red-500 gap-4 grid grid-cols-1 md:grid-cols-2'>

        {
            cardData.map(card =><div className="card bg-base-100 shadow-md px-2 py-4">

    <div className="">
    <div className='flex justify-between '>
        <h2 className="card-title text-lg font-semibold">{card.title}</h2>
        <div className='flex items-center gap-2 bg-green-100 text-green-700 rounded-full w-fit px-3 py-1'>
            <span className='w-2.5 h-2.5 bg-green-600 rounded-full'></span>
            <span className=' font-medium text-xs'>{card.status}</span>
        </div>
    </div>
    <p className='text-sm py-2 text-[#627382]'>{card.description}</p>
    
    <div className='flex justify-between '>
        <div className='gap-2 flex'>
            <div>{card.id}</div>
            <div className='text-[#F83044] ml-3'>{card.priority}</div>
        </div>
        <div className='flex items-center gap-2'>
            <div>
            <span className='text-[#627382]'>{card.customer}</span>
            </div>
            <div>
                <img className='text-[#627382]' src={cardIcon} alt="" />
            </div>

            <div><span className='text-[#627382]'>{card.createdAt}</span></div>
        </div>
    </div>
  </div>
</div>)
        }

       
        </div>
    );
};

export default CardItem;