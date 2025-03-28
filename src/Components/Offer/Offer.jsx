import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png';
import './Offer.css'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer_left">
      <h1>Exclusive<br/>Offers For You</h1>
      <p>Get 20% off on your first purchase</p>
      <button>Check Now</button>
      </div>
      <div className="offer_right">
        <img height={400} src={exclusive_image}/>
      </div>
    </div>
  )
}

export default Offer
