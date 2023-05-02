import React, { useEffect, useState } from 'react'
import Card from './Card'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      return onSnapshot(collection(db, "sneaks"), snapshot => {
        setProducts(snapshot.docs);
      });
  }, [db])

  return (
    <div className='bg-zinc-950 h-full pb-10'>
        
        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

            <div className='grid gap-4 grid-cols-3 grid-rows-2 pl-10 pr-10 pt-10'>

                {products.map((product) => (
                  <Card
                  name = {product.data().name}
                  price = {product.data().price}
                  category = {product.data().category}
                  img1 = {product.data().img1}
                  img2 = {product.data().img2}
                  img3 = {product.data().img3}
                  />
                ))}

            </div>

        </div>

    </div>
  )
}

export default Products