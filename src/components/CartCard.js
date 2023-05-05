import React, { useEffect } from 'react'
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
    <div className='bg-[#fff] rounded-xl text-zinc-400 flex justify-between p-5 items-center overflow-x-hidden'>
        <Image
        src={img}
        width={100}
        height={100}
        alt={name}
        className='mr-2'
        />
        <h1 className='text-sm mr-2'>
            {name}
        </h1>
        <h1 className='text-sm mr-2'>
            US {size}
        </h1>
        <h2 className='text-sm mr-2'>
            CAD {price}
        </h2>
        <button className='h-5 w-5'>
            <XIcon onClick={delCart} />
        </button>
    </div>
  )
}

export default CartCard