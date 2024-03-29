import React from 'react'
import {BsLinkedin, BsGithub,BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/siddharth-singh-60547728b" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/siddharthsingh19" target='_blank'><BsGithub /></a>
        <a href="https://dribble.com" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials