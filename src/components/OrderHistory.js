import React from 'react'

function OrderHistory() {
  return (
    <div className='mt-2'>
        <h1>
            Order History
        </h1>
        <div className='bg-[#fff] rounded-xl text-zinc-400 grid grid-cols-3 grid-rows-1 items-center p-5 mt-5'>
        <h1 className='text-sm col-span-1 flex justify-center items-center'>
            Order Id: Cowjihkkfjdfhjdkjp
        </h1>
        <div className='text-sm col-span-1 flex justify-center items-center flex-col'>
            <ul>
                <li>Items:</li>
                <li>Air Jordan 1 Retro</li>
                <li>Air Jordan 1</li>
            </ul>
        </div>
        
        <h2 className='text-sm col-span-1 flex justify-center items-center'>
            Total: CAD 165
        </h2>
    </div>
    </div>
  )
}

export default OrderHistory