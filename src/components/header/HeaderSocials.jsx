import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/juan-carlos-fern%C3%A1ndez-ram%C3%ADrez-98b9b221a/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/JuanCarlosFR26?tab=repositories' target='_blank'><FaGithub/></a>
        <a href='https://twitter.com/JuanquiDev' target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials