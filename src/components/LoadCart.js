import React, { useEffect, useState } from 'react'
import CartCard from './CartCard'
import OrderHistory from './OrderHistory'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSession } from 'next-auth/react';

function LoadCart() {

    const {data: session} = useSession();
    const [items, setItems] = useState([]);

    useEffect(() => {

    
        return onSnapshot(query(collection(db, 'users', session.user.email, 'cart'), orderBy('timestamp', 'desc')), snapshot => {
          setItems(snapshot.docs);
        });
    }, [db])


  return (
    <div className='bg-zinc-300 pb-10 h-screen'>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
            <div className='pl-10 pr-10 pt-10'>
                <div className='grid gap-4 grid-cols-1'>
                    {items.map((item) => (
                        <CartCard 
                        img = {item.data().productImg.img}
                        name = {item.data().name.name}
                        price = {item.data().price.price}
                        size = {item.data().size.selectedValue}
                        id = {item.id}
                        />
                    ))}
                    
                </div>
            </div>
            <div className='pl-10 pr-10 pt-10 flex justify-center'>
                <button className='bg-zinc-800 text-[#fff] pt-3 pb-3 pl-10 pr-10 rounded-full text-sm hover:bg-zinc-500 disabled:bg-zinc-500 disabled:cursor-not-allowed'>
                    Pay $165
                </button>
            </div>
        </div>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
            <div className='pl-10 pr-10 pt-10'>
                <div className='grid gap-4 grid-cols-1'>
                    <OrderHistory />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadCart