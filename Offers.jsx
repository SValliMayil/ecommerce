import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
        <h1>Exciting</h1>
       <h1>Offers</h1>
       <p>Only on best sellers products</p>
       <button>Check Now</button>
     </div>
     <div className="offers-right">
        <img src={exclusive_img} alt="" />
     </div>
    </div>
  )
}

export default Offers
