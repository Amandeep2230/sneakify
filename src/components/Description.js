import React from 'react'

function Description({name, category, price}) {
  return (
    <div>
        <div className='pl-10 pr-10 pt-10'>

            <div className='flex'>
            <div>
            <h1 className='text-zinc-600 text-2xl'>
                {name}
            </h1>
            <div className='flex mt-1 space-x-4 text-zinc-600 text-sm'>
            <h3>
                {category}
            </h3>
            <h1> | </h1>
            <h3>
                CAD {price}
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
    </div>
  )
}

export default Description