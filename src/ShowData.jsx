import React from 'react'
import { useState } from 'react';
function ShowData({title,price,img ,rating}) {
  
  return (
<div className='flex  ' >
<div className='font-semibold w-[500px] h-[300px] gap gap-5  shadow-xl shadow-slate-600 pl-[120px] pt-10' >
   <img className='h-24 w-24 ' src={img}/>
   <h1>{title}</h1>
   <br></br>
   <p className=''>${price}</p>
   <div className='space-x-1'>
   <button className='bg-black text-white p-2' type='click'>Add to Cart</button>
   <button className='bg-black text-white p-2' type='click'>Buy Now</button>
   </div>
</div>


<div className='font-bold flex flex-wrap'>
  <span>{rating}</span>
</div>

</div>
  )
}

export default ShowData