import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <header>
            <div>
                <NavLink to = '/'>MyName</NavLink>
            </div>
        </header>
      
    </div>
  )
}

export default Navbar
