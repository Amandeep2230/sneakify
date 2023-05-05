import Nav from '@component/components/Nav'
import {BadgeCheckIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/router';
import { doc, deleteDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../firebase';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

function success() {
    const router = useRouter();
    const handleHome = async () => {
        router.push('/')
    }

    const handleOrder = async () => {
        router.push('/cart')
    }

  return (
    <div className=''>
        <div className='bg-zinc-300 h-screen pt-10'>
            <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
                <div className='bg-[#fff] rounded-lg text-[#111] p-20'>
                    <div className='flex justify-center'>
                    <BadgeCheckIcon className='h-20 w-20 align-center text-[#59981A]' />
                    </div>
                    <h1 className='text-xl text-center'>Success</h1>
                    <h2 className='text-sm text-center mt-2'>Your order has been placed</h2>
                    <div className='flex justify-center mt-10'>
                        <button className='bg-zinc-800 text-[#fff] pt-2 pb-2 pl-5 pr-5 rounded-xl mr-5 hover:bg-zinc-500'
                        onClick={handleHome}>
                            Home
                        </button>
                        <button className='bg-zinc-800 text-[#fff] pt-2 pb-2 pl-5 pr-5 rounded-xl hover:bg-zinc-500'
                        onClick={handleOrder}>
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