import React from 'react'

// IMPORT CSS
import '../styles/Contact.css';

// IMPORT PICTURES
import ContactUs from '../assets/contact.png'

function Contact() {
  return (
    <div className='contact'>

        <div className='leftSide'
        style={ {backgroundImage: `url(${ContactUs})` }}
        >
        </div>

        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id='contact-form' method='POST'>

                <label htmlFor='name'>Full Name</label>
                <input type='text' name='name' placeholder='Enter Full Name..' />

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Enter Email..' />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="10" placeholder='Enter Message..' required></textarea>

                <button type='submit'> Send Message</button>

            </form>

        </div>

    </div>
  )
}

export default Contact