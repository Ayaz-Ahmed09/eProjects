import React from 'react'
import ReactDOM from 'react-dom/client'
import App,{loader as loderPost} from './App.jsx'
import Login from './Login.jsx'
import Singup from './Singup.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDeatil from './ProductDeatil.jsx'
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    loader: loderPost,
    
    
  },
  {
    path:'/Login',
    element:<Login/>
  }
  ,
  {
    path:'/Singup',element:<Singup/>
  },
  {
    path:'/ProductDeatil',
    element:<ProductDeatil/>
  },
 
  
  ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
)
// reportWebVitals()