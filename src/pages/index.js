import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from "../components/Nav"
import ProductDetails from '@component/components/ProductDetails'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>

      {/* Nav */}
      <Nav />

      {/* Product Details */}
      <ProductDetails />

    </div>

  )
}
