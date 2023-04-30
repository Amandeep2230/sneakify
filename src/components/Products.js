import React from 'react'
import Card from './Card'

function Products() {
  return (
    <div className='bg-zinc-950 h-full pb-10'>
        
        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

            <div className='grid gap-4 grid-cols-3 grid-rows-4 pl-10 pr-10 pt-10'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

        </div>

    </div>
  )
}

export default Products