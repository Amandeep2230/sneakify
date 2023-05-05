import React from 'react'
import moment from 'moment/moment'

function OrderData({names, price, id, timestamp}) {

    const arr = names.join(', ');
  return (
    <div>
        <div className='bg-[#fff] rounded-xl text-zinc-400 flex justify-between p-5 items-center mt-4'>
        <h1 className='text-sm mr-2'>
            Order # {id.slice(-10)}
        </h1>
        <h1 className='text-sm mr-2'>
            {moment.unix(timestamp).calendar()}
        </h1>
        <div className='text-sm mr-2'>
            <ul>
                {arr}
            </ul>
        </div>
        
        <h2 className='text-sm'>
            TOTAL: CAD {price}
        </h2>
    </div>
    </div>
  )
}

export default OrderData