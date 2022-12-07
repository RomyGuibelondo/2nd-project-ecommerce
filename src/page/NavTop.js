import React from 'react'


function NavTop() {
  return (
    <div className="aside site-off desktop-hide">
        <div className="off-canvas">
            <div className="canvas-head flexitem">
                <div className="log">
                    <a><span className='circle'></span>GTV.Store</a>
                </div>
                <a className='t-close flexcenter'><i className="ri-close-line"></i></a>
            </div>
            <div className="departments"></div>
            <nav></nav>
            <div className="thetop-nav"></div>
        </div>
    </div>
  )
}

export default NavTop