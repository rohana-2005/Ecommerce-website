import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={handleScrollToTop} width={270} src={props.image}/></Link>
      <p>{props.name}</p>
      <div className='item-price'>
        <p id='new'>Price: <b>${props.new_price}</b></p>
        <p id='old'>${props.old_price}</p>
      </div>
    </div>
  )
}

export default Items;
