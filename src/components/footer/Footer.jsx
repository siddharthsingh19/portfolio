import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaEthereum} from 'react-icons/fa6'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><FaEthereum/></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small><span className='cplft'>&copy;</span> HeHeHeHe. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer