import React, { useEffect, useState } from 'react';
import cardIcon from '../../assets/Vector-icon.png'

const CardItem = ({cardData= [], onCardClick, selectedTasks, onComplete, resolvedTask }) => {
    // const [cardData, setCardData] = useState([]);

    useEffect(() => {
         fetch('/card.json')
        .then(res =>res.json())
        .then(data => setCardData(data))
        .catch(err => console.error('Error loading data:', err));
    }, [])
    // console.log(cardData)
    return (
   <div className="max-w-[1500px] mx-auto p-10 border-2 border-black bg-base-200 gap-4 flex flex-col md:flex-row">
    <div>
        <h1 className='text-lg font-semibold pl-3 pb-1.5'>Customer Tickets</h1>
      <div className='w-full  bg-base-200 border-2 border-green-500 gap-4 grid grid-cols-1 md:grid-cols-2'>

         {
            cardData.map(card =><div key={card.id} className="card bg-base-100 shadow-md px-2 py-4"
            onClick={() => onCardClick(card)}>
    <div className="">
    <div className='flex justify-between '>
        <h2 className="card-title text-sm font-semibold">{card.title}</h2>
        <div className='flex items-center gap-2 bg-green-100 text-green-700 rounded-full w-fit px-3 py-1'>
            <span className='w-3/4 h-2.5 bg-green-600 rounded-full'></span>
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

            <div><span className='text-[#8ea0af]'>{card.createdAt}</span></div>
        </div>
    </div>
  </div>
</div>)
        }  </div>
    </div>
        <div className="md:w-1/4 border-2 border-red-500  ">
        <div className='task-status-right'>
            <h1 className=' text-lg font-semibold px-3'>Task Status</h1>
            {selectedTasks.length > 0 ? (
                selectedTasks.map(task => (
                   <div key={task.id} className=' border-1 border-gray-300 text-3xl font-bold place-items-center bg-white rounded-md p-2 m-2 text-center shadow-gray-500'>
                    <span className='text-sm font-medium  bg-base-200'>{task.title}</span>
                    <div>
                        <button onClick={() => onComplete(task.id)} className='btn btn-sm w-2xs btn-success text-white bg-green-500'>complete</button>
                    </div>
                   </div> 
                ))
            ) : ( 
                <p className='text-sm text-[#627382] px-3'>Select a ticket to add to Task Status</p>
            ) }
            
        </div>
        <div className='p-3'>
            <h2 className='text-lg font-semibold'>Resolved-Task</h2>
            <p className='text-sm text-[#627382] pt-3'>Incorrect Billing Address</p>
        </div>
        </div>
   </div>
    );
};

export default CardItem;