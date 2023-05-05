import React, { useEffect, useState } from 'react'
import Card from './Card'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import ProductDetails from './ProductDetails';

function Products() {

  const [products, setProducts] = useState([]);
  const [msg,setMsg] = useState([])
  let shoeName=""
  let price = ""
  let category = ""
  let img1 = ""
  let img2 = ""
  let img3 = ""
  

  if (msg.length==0) {
    img1="https://firebasestorage.googleapis.com/v0/b/sneakify-c48c0.appspot.com/o/sneaks%2Fair_jordans_1%2Fair_jordans_1-1.png?alt=media&token=7c01cbc0-a6c5-42b6-87eb-9698d5fd5fd7"
    img2="https://firebasestorage.googleapis.com/v0/b/sneakify-c48c0.appspot.com/o/sneaks%2Fair_jordans_1%2Fair_jordans_1-2.png?alt=media&token=5e2e4891-7ab5-42a8-a281-420237281994"
    img3="https://firebasestorage.googleapis.com/v0/b/sneakify-c48c0.appspot.com/o/sneaks%2Fair_jordans_1%2Fair_jordans_1-3.png?alt=media&token=d6877dc1-0f08-4e54-b347-638ae4c1c4d7"
    shoeName="Air Jordan 1 Mid"
    price="165"
    category="Men's Shoes"
  }
  else {
    shoeName  = msg[0]
    price = msg[1]
    category = msg[2]
    img1 = msg[3]
    img2 = msg[4]
    img3 = msg[5]
  }
  useEffect(() => {

    
      return onSnapshot(collection(db, "sneaks"), snapshot => {
        setProducts(snapshot.docs);
      });
  }, [db])

  function prodDet (details) {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    setMsg(details)
  }

  return (
    <div>

      <ProductDetails
      img1 = {img1}
      img2 = {img2}
      img3 = {img3}
      shoeName = {shoeName}
      price = {price}
      category = {category}
      />
    
    <div className='bg-zinc-950 h-full pb-20'>
        
        <div className='w-full xl:max-w-7xl lg:max-w-4xl mx-auto'>

            <div className='grid gap-4 grid-cols-3 grid-rows-2 pl-10 pr-10 pt-10'>

              
                {products.map((product) => (
                  <Card
                  key={product.id}
                  name = {product.data().name}
                  price = {product.data().price}
                  img1 = {product.data().img1}
                  img2 = {product.data().img2}
                  img3 = {product.data().img3}
                  category = {product.data().category}
                  id = {product.data().id}
                  onMessage={prodDet}
                  />
                ))}
            </div>

        </div>

    </div>
    </div>
  )
}

export default Products