import React from 'react'
import './NewsLetters.css'
const NewsLetter = () => {
  return (
    <div className='newsletters'>
      <h1>Get exclusive Offers On your email</h1>
      <p>Subscribe to our news letters and stay updated</p>
      <div>
        <input type="email" placeholder='your email id' ></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
