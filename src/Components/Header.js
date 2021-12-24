import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import More from './More';

function Header(props) {
    return (
        <div className='header'>
           <img className='img' src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png" width="150px" height="60px"/>
               <input className='input' placeholder='Search for products, brands and more' type="text" />
               <SearchIcon className='search'/>
               <button className='login'>Login</button>
               <div className="cart">
               <ShoppingCartIcon />
               <h4 className="cartone">Cart</h4>
               </div>
               
               <div className="more"><More /></div>
              
        </div>
    )
}

export default Header
