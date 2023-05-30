import React from 'react'
import "./Header.css"
import { Search } from './Search'
import { Navbar } from './Navbar'
import { Head } from './Head'
export const Header = () => {
  return (
    <div>
        <Head/>
        <Search/>
        <Navbar/>
    </div>
  )
}
