import React from 'react'
import { Home } from '../components/mainpage/Home'
import { FlashDeals } from '../components/flashDeals/FlashDeals'
import { TopCate } from '../components/top/TopCate'
import { NewArrivals } from '../components/newarrivals/NewArrivals'
import { Discount } from '../components/discount/Discount'
import { Shop } from '../components/shop/Shop'

export const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <div>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop/>
    </div>
  )
}
