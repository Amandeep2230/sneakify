import React from 'react'
import Image from 'next/image'
import air_jordans_1_1 from '../../sneaks/air_jordans_1-1.png'
import air_jordans_1_2 from '../../sneaks/air_jordans_1-2.png'
import air_jordans_1_3 from '../../sneaks/air_jordans_1-3.png'

function ProductDetails() {
  return (
    <div className='bg-zinc-300 h-screen'>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

        <div className='flex flex-col'>

            <div className='flex overflow-x-scroll snap-mandatory snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-zinc-400'>
                
                <Image
                src={air_jordans_1_1}
                className='snap-center max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl'
                />

                <Image
                src={air_jordans_1_2}
                className='snap-center max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl'
                />

                <Image
                src={air_jordans_1_3}
                className='snap-center max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl'
                />
            </div>

        </div>
        </div>

    </div>
  )
}

export default ProductDetails