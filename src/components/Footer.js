import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='bg-zinc-950 h-full'>
        
        <hr className='border-zinc-700'>
        </hr>
        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
            

            <h1 id='logo2' className='text-[#fff] text-center pt-10 mb-1 mt-4'>
                sneakify
            </h1>

            <h3 className='text-zinc-500 text-sm text-center pb-1'>
                This project is for educational purposes only and doesn't deal with selling any product.
            </h3>
            <h3 className='text-zinc-500 text-sm text-center pb-10'>
                Developed by Amandeep Singh Bhalla &#x2764;
            </h3>

            <div className='flex justify-center'>
                <SocialIcon
                url='https://github.com/Amandeep2230'
                bgColor='transparent'
                fgColor='gray'
                target='_blank' />
            </div>

        </div> 

    </div>
  )
}

export default Footer