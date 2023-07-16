import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>JuanquiDev - Make DnD</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='https://juanquidev-portfolio-react.netlify.app/' target='_blank'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://twitter.com/JuanquiDev' target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Juanquidev - Make DnD. All rigths reserved 2023</small>
      </div>
    </footer>
  )
}

export default Footer