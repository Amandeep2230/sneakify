import Footer from '@component/components/Footer'
import Nav from '@component/components/Nav'
import React, { useEffect, useState } from 'react'
import CardCart from '../components/CartCard'
import OrderHistory from '../components/OrderHistory'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { db } from '../../firebase'
import axios from 'axios'

function Cart() {

  const {data: session} = useSession();
  const [items, setItems] = useState([]);
  const stripePromise = loadStripe(process.env.stripe_public_key);

  useEffect(() => {

      return onSnapshot(query(collection(db, 'users', session.user.email, 'cart'), orderBy('timestamp', 'desc')), snapshot => {
      setItems(snapshot.docs);
      });
  }, [db])

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    let prods = []
    items.map((item)=>(
        prods.push(
          {
            itemName: item.data().name.name,
            itemPrice: item.data().price.price,
            itemSize: item.data().size.selectedValue,
            itemImg: item.data().productImg.img
          })
    ))

    //create checkout session
    const checkoutSession = await axios.post('/api/checkout_sessions', {
      items: prods,
      email: session.user.email
    });

    //redirect to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    };
  };

  return (
    <div>
        <Nav />

        <div className='bg-zinc-300 pb-10 h-screen'>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>
            <div className='pl-10 pr-10 pt-10'>
                <div className='grid gap-4 grid-cols-1'>
                    {items.map((item) => (
                        <CardCart 
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
                <button className='bg-zinc-800 text-[#fff] pt-3 pb-3 pl-10 pr-10 rounded-full text-sm hover:bg-zinc-500 disabled:bg-zinc-500 disabled:cursor-not-allowed'
                role='link' onClick={createCheckoutSession}>
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

        <Footer />
    </div>
  )
}

export default Cart