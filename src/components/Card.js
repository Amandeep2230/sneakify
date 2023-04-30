import React from 'react'
import Image from 'next/image'
import air_jordan_1 from "../../sneaks/air_jordans_1-1.png"

function Card() {
  return (
    <div className='bg-zinc-700 rounded-xl cursor-pointer p-5 hover:ring-zinc-600 hover:ring-1'>
        
        <Image
        src={air_jordan_1}
        className=''
        />
        <div className='text-zinc-400'>
            <h1 className='text-lg'>
                Air Jordan 1
            </h1>
            <h2 className='text-sm'>
                $165
            </h2>
        </div>

    </div>
  )
}

export default Card