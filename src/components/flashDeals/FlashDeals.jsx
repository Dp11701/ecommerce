import React from 'react'
import { FlashCard } from './FlashCard'
import "./style.css"
export const FlashDeals = ({productItems, addToCart}) => {
  return (
    <div>
        <section className='flash background'>
            <div className="container">
                <div className="heading f_flex">
                <i class="fa fa-bolt"></i>
                <h1>Flash Deals</h1>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart}/>
            </div>
        </section>
    </div>
  )
}
