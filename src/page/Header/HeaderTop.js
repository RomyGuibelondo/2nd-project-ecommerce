import React from 'react'
import '../../Style/HeaderStyle/HeaderTop.css'

function HeaderTop() {
  return (
    <div className='header-top mobile-hide'>
        <div className='container'>
            <div className='wrapper flexitem'>
                <div className='left'>
                    <ul className='flexitem main-links'>
                        <li><p>Blog</p></li>
                        <li><p>Featured Product</p></li>
                        <li><p>Wishlist</p></li>
                    </ul>
                </div>
                <div className='right'>
                    <ul className='flexitem main-links'>
                        <li><p>Sign</p></li>
                        <li><p>My Account</p></li>
                        <li><p>Order Tracking</p></li>
                        <li>
                            <p>PHP 
                                <span> 
                                    <i className='ri-arrow-down-s-line'></i>
                                </span>
                            </p>
                            <ul>
                                <li className='current'><p>PHP</p></li>
                                <li><p>USD</p></li>
                                <li><p>UERO</p></li>
                                <li><p>GBP</p></li>
                            </ul>
                        </li>
                        <li>
                            <p>English
                                <span>
                                    <i className='ri-arrow-down-s-line'></i>
                                </span>
                            </p>
                            <ul>
                                <li><p>Tagalog</p></li>
                                <li><p>English</p></li>
                                <li><p>German</p></li>
                                <li><p>Spanish</p></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop