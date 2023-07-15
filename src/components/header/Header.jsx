import React from 'react'
import DND from '../../assets/dnd.jpg'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
            <h5>Hello, Welcome to</h5>
            <h1>Mode DnD</h1>
            <h5 className='text-light'>Enjoy it!</h5>
            <HeaderSocials />
            <div className='dnd'>
                <img className='img_dnd' src={DND} alt='dnd_img'></img>
            </div>
            <a href='#contact' className='scroll'>
                Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Header