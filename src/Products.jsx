import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ShowData from './ShowData'

function Products() {
  
  const APIURL='https://fakestoreapi.com/products'
const [Products,setProduct]=useState([]);
useEffect(()=>{
  axios.get(APIURL)
  .then(
   (res)=>{
    setProduct(res.data)
     
  })
},[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap gap-3'>
 {Products.map((pro)=>    <ShowData title={pro.title} price={pro.price} img={pro.image} Rating={pro.rate } id={pro.id} />)}
    </div>
  )
}

export default Products