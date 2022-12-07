import React from 'react'
import '../Style/HeaderStyle/headerResponsive.css'



function NavTop() {
  return (
    <div className="aside site-off desktop-hide">
        <div className="off-canvas">
            <div className="canvas-head flexitem">
                <div className="log">
                    <p>
                      <span className='circle'></span>GTV.Store
                    </p>
                </div>
                <p className='t-close flexcenter'>
                  <i className="ri-close-line"></i>
                </p>
            </div>
            <div className="departments"></div>
            <nav></nav>
            <div className="thetop-nav"></div>
        </div>
    </div>
  )
}

export default NavTop