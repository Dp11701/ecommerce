import React from 'react'
import { Home } from '../components/mainpage/Home'
import { FlashDeals } from '../components/flashDeals/FlashDeals'

export const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <div>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
    </div>
  )
}
