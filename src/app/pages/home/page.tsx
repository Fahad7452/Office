import Carosel from '@/Components/Carosel'
import CustomerGet from '@/Components/Customer-Get'
import Features from '@/Components/Features'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Make from '@/Components/Make'
import Pricing from '@/Components/Priceing'
import Navbar  from '@/Components/Navbar/index'
import React from 'react'

function Index() {
  return <>
  
  <Navbar/>
  <Header/>
  <Features/>
  <Make/>
  <Carosel/>
  <CustomerGet/>
<Pricing/>
<Footer/>
<Navbar/>  
  
  
  
  </>
}

export default Index