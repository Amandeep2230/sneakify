import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from "../components/Nav"
import ProductDetails from '@component/components/ProductDetails'
import Products from '@component/components/Products'
import Footer from '@component/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>

      {/* Nav */}
      <Nav />

      {/* Product Details */}
      <ProductDetails />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </div>

  )
}
