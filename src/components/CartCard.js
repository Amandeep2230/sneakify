import React from 'react'
import air_jordan_1 from "./../../sneaks/air_jordan_1_retro.png"
import Image from 'next/image'
import {XIcon} from "@heroicons/react/outline"

function CartCard() {
  return (
    <div className='bg-[#fff] rounded-xl text-zinc-400 grid grid-cols-5 grid-rows-1 items-center p-5'>
        <Image
        src={air_jordan_1}
        width={100}
        height={100}
        />
        <h1 className='text-sm col-span-1 flex justify-center items-center'>
            Air Jordan 1 Retro
        </h1>
        <h1 className='text-sm col-span-1 flex justify-center items-center'>
            US 12
        </h1>
        <h2 className='text-sm col-span-1 flex justify-center items-center'>
            CAD 165
        </h2>
        <button className='h-5 w-5 ml-auto col-span-1 flex'>
            <XIcon />
        </button>
    </div>
  )
}

export default CartCard