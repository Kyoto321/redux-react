import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const numberOfProducts = useSelector(state => state.cart.totalQuantity) 

  return (
    <div className='bg-black text-white py-3 px-20 flex justify-between items-center'>
      <Link to='/' className='text-3xl font-semibold'>online shop</Link>
      <Link to='/cart' className=''>Cart {" "} {numberOfProducts}</Link>



    </div>
  )
}

export default Navbar
