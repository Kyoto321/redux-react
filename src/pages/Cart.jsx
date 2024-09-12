import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const totalQuantity = useSelector(state  => state.cart.totalQuantity)

  return (
    <div className='py-8 px-32'>
        <h1 className='text-3xl font-bold mb-2'>Cart</h1>
        <p className='font-bold mb-2'>Total Items: {totalQuantity}</p>
        <p className='font-bold mb-2'>Total Amount: {totalAmount.toFixed(2)}</p>
        
        <div>
            {items.map((p) => (
            <div className='flex border p-2 w-96 justify-between items-center' key={p.id}>
                    <img src={p.image} alt={p.title}  className='w-24 h-24' />
                    <p>quantity: {p.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(p.id))} className='px-2 border bg-yellow-400'>Remove</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Cart
