import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import OrderData from './OrderData';

function OrderHistory() {

    const { data: session } = useSession();
    const [items, setItems] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, 'users', session.user.email, 'orders'), orderBy('timestamp', 'desc')), snapshot => {
            setItems(snapshot.docs);
        })
    }, [db])


  return (
    <div className='mt-2'>
        <h1>
            Your Orders
        </h1>
        <hr className='border-zinc-500 mt-1'></hr>
        {items.map((product) => (
                  <OrderData
                  key={product.id}
                  names = {product.data().name}
                  price = {product.data().amount}
                  id = {product.id}
                  timestamp = {product.data().timestamp}
                  />
                ))}
        
    </div>
    
    
  )
}

export default OrderHistory