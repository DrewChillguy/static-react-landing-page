import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socials">
            <h2>FOODIE</h2>
            <img src={facebook} />
            <img src={youtube} />
        </div>
        <div className="sub-links">
            <p>Quality</p>
            <p>Help</p>
            <p>Share</p>
            <p>Carrers</p>
            <p>Work</p>
            <p>Testimonials</p>
        </div>
        <div className="contact">
            <p>123-321-7890</p>
            <p>foodie@foodmail.com</p>
            <p>contact@foodmail.com</p>
        </div>
        <div className="terms-condition">
            <p>Terms & Conditions</p>
            <p>Privacy Policay</p>
        </div>
    </div>
  )
}

export default Footer