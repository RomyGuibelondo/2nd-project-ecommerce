import React from 'react';


function HeaderNav() {
  return (
    <div className='header-nav'>
        <div className='container'>
            <div className='wrapper flexitem'>
                <p className='trigger desktop-hide'>
                    <span>
                        <i className='ri-menu-2-line'></i>
                    </span>
                </p>
                <div className='left flexitem'>
                    <div className='logo'>
                        <p>
                            <span className='circle'></span>GTV.Store
                        </p>
                    </div>
                    <nav className='mobile-hide'>
                        <ul className='flexitem second-links'>
                            <li><p>Home</p></li>
                            <li><p>Shop</p></li>
                            <li className='has-child'>
                                <p>Women
                                    <div className='icon-small'>
                                        <i className='ri-arrow-down-s-line'></i>
                                    </div>
                                </p>
                                <div className='mega'>
                                    <div className='container'>
                                        <div className='wrapper'>
                                            <div className='flexcol'>
                                                <div className='row'>
                                                    <h4>Women's Clothing</h4>
                                                    <ul>
                                                        <li><p>Dresses</p></li>
                                                        <li><p>Top & tees</p></li>
                                                        <li><p>Jacket & Coats</p></li>
                                                        <li><p>Pants & Capris</p></li>
                                                        <li><p>Sweaters</p></li>
                                                        <li><p>Costumes</p></li>
                                                        <li><p>Hoodies & Sweatshirst</p></li>
                                                        <li><p>Pajama & Robes</p></li>
                                                        <li><p>Shorts</p></li>
                                                        <li><p>Swimwear</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flexcol'>
                                                <div className='row'>
                                                    <h4>Jewelry</h4>
                                                    <ul>
                                                        <li><p>Accessories</p></li>
                                                        <li><p>Bags & Purses</p></li>
                                                        <li><p>Necklaces</p></li>
                                                        <li><p>Rings</p></li>
                                                        <li><p>Earrings</p></li>
                                                        <li><p>Bracelets</p></li>
                                                        <li><p>Body Jewelry</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flexcol'>
                                                <div className='row'>
                                                    <h4>Beauty</h4>
                                                    <ul>
                                                        <li><p>Bath Accessories</p></li>
                                                        <li><p>Makeup & Cosmetics</p></li>
                                                        <li><p>Skin Care</p></li>
                                                        <li><p>Hair Care</p></li>
                                                        <li><p>Essential Oils</p></li>
                                                        <li><p>Fragrances</p></li>
                                                        <li><p>Soap & Bath Bombs</p></li>
                                                        <li><p>Face Mask & Cosmetics</p></li>
                                                        <li><p>Spa Kits & Gifts</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flexcol'>
                                                <div className='row'>
                                                    <h4>Top Brancds</h4>
                                                    <ul className='women-brands'>
                                                        <li><p>Nike</p></li>
                                                        <li><p>Louis Vuitton</p></li>
                                                        <li><p>Hermes</p></li>
                                                        <li><p>Gucci</p></li>
                                                        <li><p>Zalando</p></li>
                                                        <li><p>Tiffany & Co</p></li>
                                                        <li><p>Zara</p></li>
                                                        <li><p>H&M</p></li>
                                                        <li><p>Carlier</p></li>
                                                        <li><p>Chanel</p></li>
                                                        <li><p>Hurley</p></li>
                                                    </ul>
                                                    <p className='view-all'>View All brands 
                                                        <i className='ri-arrow-right-line'></i>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flexcol product'>
                                                <div className='row'>
                                                    <div className='media'>
                                                        <div className='thumnail object-cover'>
                                                            <p>
                                                            <img src={require('../../assets/products/apparel4.jpg')} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderNav