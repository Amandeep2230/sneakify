import React from 'react'
import air_jordan_1 from "./../../sneaks/air_jordan_1_retro.png"
import Image from 'next/image'
import {XIcon} from "@heroicons/react/outline"
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useSession } from 'next-auth/react'

function CartCard({img, name, price, size, id}) {

    const {data: session} = useSession();
    const delCart = async () => {
        await deleteDoc(doc(db, 'users', session.user.email, 'cart', id))
    }

  return (
    <div className='bg-[#fff] rounded-xl text-zinc-400 grid grid-cols-5 grid-rows-1 items-center p-5'>
        <Image
        src={img}
        width={100}
        height={100}
        />
        <h1 className='text-sm col-span-1 flex justify-center items-center'>
            {name}
        </h1>
        <h1 className='text-sm col-span-1 flex justify-center items-center'>
            US {size}
        </h1>
        <h2 className='text-sm col-span-1 flex justify-center items-center'>
            CAD {price}
        </h2>
        <button className='h-5 w-5 ml-auto col-span-1 flex'>
            <XIcon onClick={delCart} />
        </button>
    </div>
  )
}

export default CartCard