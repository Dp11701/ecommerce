import React from 'react'
import "./Header.css"
import { Search } from './Search'
import { Navbar } from './Navbar'
import { Head } from './Head'
export const Header = ({cartItem, addToCart}) => {
  return (
    <div>
        <Head/>
        <Search cartItem={cartItem} addToCart={addToCart}/>
        <Navbar/>
    </div>
  )
}
