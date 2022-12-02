import React from 'react'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';

const Footer = ({theme}) => {
  return (
    <footer className={theme === 'dark' ? 'dark' : 'light'}>
    <div>Created by &copy; Ahmed Hassan</div>
    <div className='footer-icon'>
      <div>
        <a target='_blank' rel='noreferrer' 
            href='https://github.com/u31999' >
            <FaGithub />
        </a> 
      </div>
      <div>
        <a target='_blank' rel='noreferrer' 
            href='https://www.linkedin.com/in/ahmed-hassan-elzain/'>
             <FaLinkedin />
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' 
            href='https://ahmed-portofolio.vercel.app/'>
            <FaLink />
        </a>
      </div>
      </div>
    </footer>
  )
}

export default Footer
