import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firebase';
import { signIn, signOut, useSession } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Description({name, category, price, img}) {

    const {data: session} = useSession();
    const [selectedValue, setSelectedValue] = useState('');

    const sizeSelect = ((event) => {
        setSelectedValue(event.target.value)
    })

    const addCart = async () => {
    
    const docRef = await addDoc(collection(db, 'users', session.user.email, 'cart'), {
        username: session.user.name,
        name: {name},
        price: {price},
        productImg: {img},
        size: {selectedValue},
        timestamp: serverTimestamp()
    })
    successfulNotification()
    }

    const signInNotification = () => {
        toast.error('Please sign in to add to cart.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
    }

    const successfulNotification = () => {
        toast.success('Item added to cart successfully!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
    }

  return (
    <div>
        <div className='pl-10 pr-10 pt-10'>

            <div className='flex'>
            <div>
            <h1 className='text-zinc-600 text-2xl'>
                {name}
            </h1>
            <div className='flex mt-1 space-x-4 text-zinc-600 text-sm'>
            <h3>
                {category}
            </h3>
            <h1> | </h1>
            <h3>
                CAD {price}
            </h3>
            </div>
            </div> 

            <div className='flex mx-auto mr-0'>
            <select onChange={sizeSelect} value={selectedValue} name="size" className='bg-inherit text-zinc-600 text-sm focus:outline-none cursor-pointer'>
                <option value="null" defaultChecked>Size</option>
                <option value="7">US 7</option>
                <option value="8">US 8</option>
                <option value="9">US 9</option>
                <option value="10">US 10</option>
                <option value="11">US 11</option>
                <option value="12">US 12</option>
            </select>
            {
                    session ? (
                        <>
                        <button className='bg-zinc-800 text-[#fff] pt-3 pb-3 pl-6 pr-6 rounded-full text-sm hover:bg-zinc-500 disabled:bg-zinc-500 disabled:cursor-not-allowed'
                        onClick={addCart}>
                            Add To Cart
                        </button>
                        </>
                    ) : (
                        <>
                        <button type='submit' className='bg-zinc-800 text-[#fff] pt-3 pb-3 pl-6 pr-6 rounded-full text-sm hover:bg-zinc-500'
                        onClick={signInNotification}>
                            Add To Cart
                        </button>
                        </>
                    )
            }

            </div>
            </div>

            </div>
            <ToastContainer />
    </div>
  )
}

export default Description