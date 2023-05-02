import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import { doc, getDoc, collection, onSnapshot } from "firebase/firestore";
import Description from './Description';

 function ProductDetails() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      return onSnapshot(collection(db, "sneaks/air_jordan_1/shoe"), snapshot => {
        setProducts(snapshot.docs);
      });
  }, [db])

  return (
    <div className='bg-zinc-300 h-full pb-10'>

        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

        <div className='flex flex-col'>

        <div className='overflow-x-scroll snap-mandatory snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-zinc-400'>
        <div className='flex max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl'>
      
                {products.map((product) => (
                  <Image
                  src={product.data().img1}
                  className='snap-center'
                  width={500}
                  height={500}
                  />
                ))}

                {products.map((product) => (
                  <Image
                  src={product.data().img2}
                  className='snap-center'
                  width={500}
                  height={500}
                  />
                ))}

                {products.map((product) => (
                  <Image
                  src={product.data().img3}
                  className='snap-center'
                  width={500}
                  height={500}
                  />
                ))}
                
              </div>
              </div>

              {products.map((product) => (
                  <Description
                  name = {product.data().name}
                  category = {product.data().category}
                  price = {product.data().price}
                  />
                ))}

            <div className='pl-10 pr-10 pt-10'>

                <div className='bg-zinc-200 rounded-lg p-4'>
                <p>
                  Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.
                </p>

                <p className='pt-4'>
                  Benefits
                  <ul className='list-disc pl-10'>
                    <li>
                      Leather, synthetic leather and textile upper for a supportive feel.
                    </li>
                    <li>
                      Foam midsole and Nike Air cushioning provide lightweight comfort.
                    </li>
                    <li>
                      Rubber outsole with pivot circle gives you durable traction.
                    </li>
                    <li>
                      Colour Shown: Black/White/Fire Red
                    </li>
                    <li>
                      Style: DQ8426-060
                    </li>
                    <li>
                    Country/Region of Origin: Indonesia
                    </li>
                  </ul>
                </p>
            </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default ProductDetails