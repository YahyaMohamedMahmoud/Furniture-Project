import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import Product_Details from './Components/Product-Details/Product_Details'
import Cart from './Components/Cart/Cart'
import Aboutus from './Components/AboutUs/Aboutus'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Wishlist from './Components/Wishlist/Wishlist'


export default function App() {
  let router = createBrowserRouter([
    {path:"" , element: <Layout/> , children:[
      {path:"/" , element : <Home/>},
      {path:"shop" , element:<Shop/>},
      {path:"/product/:id" , element:<Product_Details/>},
      {path:"cart" , element:<Cart/>},
      {path:"about" , element:<Aboutus/>},
      {path:"blog" , element:<Blog/>},
      {path:"contact" , element:<Contact/>},
      {path:"login" , element:<Login/>},
      {path:"register", element:<Register/>},
      {path:"wishlist" , element:<Wishlist/>}
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>

}

