import Nav from '@component/components/Nav'
import React from 'react'
import {BadgeCheckIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/router';

function success() {

    const router = useRouter();

  return (
    <div className=''>
        <Nav />
        <div className='bg-zinc-300 h-screen pt-10'>
            <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
                <div className='bg-[#fff] rounded-lg text-[#111] p-10'>
                    <div className='flex justify-center'>
                    <BadgeCheckIcon className='h-20 w-20 align-center text-[#59981A]' />
                    </div>
                    <h1 className='text-xl text-center'>Success</h1>
                    <h2 className='text-sm text-center mt-2'>Your order has been placed</h2>
                    <div className='flex justify-center mt-10'>
                        <button className='bg-zinc-800 text-[#fff] pt-2 pb-2 pl-5 pr-5 rounded-xl mr-5 hover:bg-zinc-500'
                        onClick={() => router.push('/')}>
                            Home
                        </button>
                        <button className='bg-zinc-800 text-[#fff] pt-2 pb-2 pl-5 pr-5 rounded-xl hover:bg-zinc-500'
                        onClick={() => router.push('/cart')}>
                            View Order
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default success