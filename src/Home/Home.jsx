import React from 'react'
import Header from './Header'
import Hero from '../components/Hero'
import Category from '../components/Category'
import ProductCards from '../components/ProductCards'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <ProductCards />
    </div>
  )
}

export default Home
