import { Link } from 'react-router-dom';
import React from 'react'
import { useParams } from 'react-router-dom'
// import { useNavigation } from 'react-router-dom';
function ShowData({title,price,img ,rating,id}) {

  // const { id } = useParams();

  // // Use the id here
  // console.log(id);
  
  return (
<div className='flex  '>
<Link to={`/ProductDeatil?productID=${id}`}><div className='font-semibold w-[500px] h-[300px] gap gap-5 md:opacity-75 cursor-pointer hover:opacity-100 shadow-xl shadow-slate-600 pl-[120px] pt-10' >
  

   <img className='h-24 w-24 ' src={img} />
   <h1 >{title}</h1>
   <br></br>
   <p className=''>${price}</p>
   <div className='space-x-1'>
   <button className='bg-black text-white p-2' type='click'>Add to Cart</button>
   <button className='bg-black text-white p-2' type='click'>Buy Now</button>
   </div>
</div>
</Link>

<div className='font-bold flex flex-wrap'>
  <span>{rating}</span>
</div>

</div>
  )
}

export default ShowData