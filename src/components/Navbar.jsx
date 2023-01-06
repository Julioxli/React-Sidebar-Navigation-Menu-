import React from 'react'
import flower from './flower.jpg';


const Navbar = ({mostrar}) => {
  return (
    <div className={mostrar ? 'sidenav active' : 'sidenav'}>
        <img src={flower} alt="flower"  className='logo'/>
        <ul>
            <li>
                <a href='#'>Home</a>
            </li>
            <li>
                <a href='#'>About us</a>
            </li>
            <li>
                <a href='#'>Contact us</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar