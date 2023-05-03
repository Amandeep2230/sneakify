import Footer from '@component/components/Footer'
import LoadCart from '@component/components/LoadCart'
import Nav from '@component/components/Nav'
import React from 'react'

function Cart() {
  return (
    <div>
        <Nav />

        <LoadCart/>

        <Footer />
    </div>
  )
}

export default Cart