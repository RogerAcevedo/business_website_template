import React from 'react'
import '../styles/Footer.css'


// MUI IMPORTS
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            < InstagramIcon />
            < TwitterIcon />
            < FacebookIcon />
        </div>
        <p> &copy; Mission Hills Smokeshop - 2023</p>
    </div>
  )
}

export default Footer