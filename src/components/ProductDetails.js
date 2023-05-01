import React from 'react'
import Image from 'next/image'
import air_jordans_1_1 from '../../sneaks/air_jordans_1-1.png'
import air_jordans_1_2 from '../../sneaks/air_jordans_1-2.png'
import air_jordans_1_3 from '../../sneaks/air_jordans_1-3.png'

function ProductDetails() {
  return (
    <div className='bg-zinc-300 h-full pb-10'>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

        <div className='flex flex-col'>

            <div className='overflow-x-scroll snap-mandatory snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-zinc-400'>
            <div className='flex max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl'>
                
                <Image
                src={air_jordans_1_1}
                className='snap-center'
                />

                <Image
                src={air_jordans_1_2}
                className='snap-center'
                />

                <Image
                src={air_jordans_1_3}
                className='snap-center'
                />
            </div>
            </div>

            <div className='pl-10 pr-10 pt-10'>

              <div className='flex'>
              <div>
              <h1 className='text-zinc-600 text-2xl'>
                Air Jordan 1 Mid
              </h1>
              <div className='flex mt-1 space-x-4 text-zinc-600 text-sm'>
                <h3>
                  Men's Shoes
                </h3>
                <h1> | </h1>
                <h3>
                  CAD 165
                </h3>
              </div>
              </div>

              <div className='flex mx-auto mr-0'>
                <form className='space-x-1'>
                  <select id="size" name="size" className='bg-inherit text-zinc-600 text-sm focus:outline-none cursor-pointer'>
                    <option value="US7">US 7</option>
                    <option value="US8">US 8</option>
                    <option value="US9">US 9</option>
                    <option value="US10">US 10</option>
                    <option value="US11">US 11</option>
                    <option value="US12">US 12</option>
                  </select>
                  <button type='submit' className='bg-zinc-800 text-[#fff] pt-3 pb-3 pl-6 pr-6 rounded-full text-sm hover:bg-zinc-500'>
                    Add To Cart
                  </button>
                </form>
              </div>
              </div>

            </div>

            <div className='pl-10 pr-10 pt-10'>

                <div className='bg-zinc-200 rounded-lg p-4'>
                <p>
                  Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.
                </p>

                <p className='pt-4'>
                  Benefits
                  <ul className='list-disc pl-10'>
                    <li>
                      Leather, synthetic leather and textile upper for a supportive feel.
                    </li>
                    <li>
                      Foam midsole and Nike Air cushioning provide lightweight comfort.
                    </li>
                    <li>
                      Rubber outsole with pivot circle gives you durable traction.
                    </li>
                    <li>
                      Colour Shown: Black/White/Fire Red
                    </li>
                    <li>
                      Style: DQ8426-060
                    </li>
                    <li>
                    Country/Region of Origin: Indonesia
                    </li>
                  </ul>
                </p>
            </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default ProductDetails