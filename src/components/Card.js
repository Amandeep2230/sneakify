import React from 'react'
import Image from 'next/image'
import Products from './Products'

function Card({name, price, img1, category, img2, img3, id, onMessage}) {

  function handleClick() {
    const ans = [name, price, category, img1, img2, img3]
    onMessage(ans)
  }

  return (
    <div className='bg-zinc-700 rounded-xl cursor-pointer p-5 hover:ring-zinc-600 hover:ring-1'
     onClick={handleClick}>
        
        <Image
        src={img1}
        height={400}
        width={400}
        />
        <div className='text-zinc-400'>
            <h1 className='text-lg'>
                {name}
            </h1>
            <h2 className='text-sm'>
                CAD {price}
            </h2>
        </div>

    </div>
  )
}

export default Card