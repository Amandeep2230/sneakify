import React from 'react'
import moment from 'moment/moment'

function OrderData({names, price, id, timestamp}) {

    const arr = names.join(', ');
  return (
    <div>
        <div className='bg-[#fff] rounded-xl text-zinc-400 grid grid-cols-4 grid-rows-1 items-center p-5 mt-3 overflow-x-hidden'>
        <h1 className='text-sm col-span-1'>
            Order # {id.slice(-10)}
        </h1>
        <h1 className='text-sm col-span-1'>
            {moment.unix(timestamp).calendar()}
        </h1>
        <div className='text-sm col-span-1'>
            <ul>
                {arr}
            </ul>
        </div>
        
        <h2 className='text-sm col-span-1 flex justify-end'>
            TOTAL: CAD {price}
        </h2>
    </div>
    {console.log(names)}
    </div>
  )
}

export default OrderData