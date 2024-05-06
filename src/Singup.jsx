import React from 'react'
import { Form } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'

function Singup() {
  return (
    <>
    <Header/>
    <div className='bg-slate-800 text-white h-[700px] border border-white text-center  space-y-2 '>

      <p className='font-bold mt-14 '>SingUP</p><br/>
      <Form>
        <div>
        <label className='ml-8'>
         Name:
        </label>
        <input className='border border-black ' type='text'/></div>
        <div>

        <label>
          LastName:
          <input className='border border-black' type='text'/>
        </label>
        </div>
        <div>
        <label className='ml-8'>
         Email:
        </label>
        <input className='border border-black ' type='text'/>
       </div>
        <label>
          Password:
          <input className='border border-black' type='text'/>
        </label>
        <div className='mr-16'>
        <label>
          CoinfirmPassword:
          <input className='border border-black' type='text'/>
        </label>
        </div>
      </Form><br/>
      <div className='ml-8'>
      <button className='bg-white text-black font-bold p-1 ml-10' type='sumbit'>Sumbit</button>
     <Link to={'/'}><button className='bg-white text-black font-bold p-1 ml-10'>Cancel</button></Link>
      </div>
    </div>
    </>
  )
}

export default Singup