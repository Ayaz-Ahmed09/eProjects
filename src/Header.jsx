import React from 'react'
import LOL from './LOL.avif'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Header() {
 const navigation = useNavigate();
 function Clickhandeler(){
 navigation('/Login')

 }
 function SingupHandler(){
  navigation('/Singup')
 }
  return (
    <div className='bg-slate-800 h-[80px] flex text-white'>
        <div className='h-[90px] w-[100px]'>
           <Link to={'/'}><img src={LOL}/></Link>
        </div>
        <div className='font-bold cursor-pointer'>
        <ul className='flex gap-6 mt-8 ml-14 mr-14'>
          <li>Shop</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>Kids</li>
        </ul>
        </div>
        <div className='mt-8 ml-[300px] space-x-6'>
            <label>Search:</label>
            <input type='serach'/>
        </div>
        <div className=' flex gap-4 ml-10'>
        <div><button  type='login' className='bg-white w-16  text-black mt-8 border border-white rounded'onClick={Clickhandeler} >Login</button></div>
        <div className=''>
      <button type='login' className='bg-white w-16 text-black mt-8 mr-[40px] border border-white rounded 'onClick={SingupHandler} >SingUp</button>
      </div>
      </div>
        </div>
  )
}

export default Header