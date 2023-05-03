import React from 'react'
import {SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

function Nav() {

    const {data: session} = useSession();

    const router = useRouter();

  return (
    <div className='bg-zinc-950 h-20 sticky top-0'>

        <div className='flex space-x-2 lg:space-x-10 pl-10 pr-10 w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

            <div className='text-[#fff] pt-5 '>
            <h1 className='text-lg lg:text-2xl'>
                <button id='logo' onClick={() => router.push('/')}>
                    sneakify
                </button>
            </h1>
            </div>

            
            <div className="relative mt-1 p-3 rounded-md w-full max-w-2xl xl:max-w-6xl lg:max-w-4xl">
                <div className="absolute inset-y-0 p-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input type="text" placeholder="Search" className="bg-zinc-700 block w-full pl-10 pt-3 pb-3 sm
                        text-sm rounded-md focus:outline-none text-gray-500"/>
            </div>

            <div className='flex space-x-4'>

                <div className='pt-7'>
                <button onClick={() => router.push('/cart')}>
                <ShoppingCartIcon className='h-5 w-5 text-[#fff]'/>
                </button>
                </div>

                <div className='pt-6'>
                {
                    session ? (
                        <>
                        <button className='text-sm text-[#fff]' onClick={signOut}>
                            SignOut
                        </button>
                        </>
                    ) : (
                        <>
                        <button className='text-sm text-[#fff]' onClick={signIn}>
                            SignIn
                        </button>
                        </>
                    )
                }
                </div>
            </div>
            </div>
    </div>
  )
}

export default Nav