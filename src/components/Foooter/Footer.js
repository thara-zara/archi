import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo-light.svg"

const Footer = () => {
  return (
    <div className='foot'>
      <div className='foot-body'>
        <div className='foot-top'>
            <img src={logo} alt="img" />
            <div className='icon'>
                <i className='fab fa-facebook'/>
                <i className='fab fa-twitter'/>
                <i className='fab fa-youtube'/>
            </div>
        </div>
        <div className='foot-mid'>
            <div className='first'>
                <h3>Sign up to stay up to date</h3>
                <p>Subscribe to our newsletter to be in the know.</p>
                <input type="text" placeholder='type your email' />
                <button> <i className="fa-solid fa-arrow-right"></i> </button>
            </div>
            <div className='second'>
                <h3>Contact Us</h3>
                <p>+1 555 436 1747
                    hello@gradastudio.com

                    4642 Roosevelt Wilson Lane Long
                    Beach, CA 90802
                </p>
                <h2>get directions</h2>
            </div>
            <div className='third'>
                <h3>projects</h3>
                <h3>our mission</h3>
                <h3>FAQ page</h3>
                <h3>comming soon</h3>
            </div>
            <div className='forth'>
                <h3>shop</h3>
                <h3>Our team</h3>
            </div>
        </div>
        <div className='foot-btm'>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
