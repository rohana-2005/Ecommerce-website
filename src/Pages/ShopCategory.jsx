import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items/Items';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)

  return (
    <div className='shopCategory'>
      <img src={props.banner}></img>
      <div className="show">
        <div className="show1">
        <p>Showing 1-12 out of 35 products</p>
        <select>
          <option>Sort By</option>
        </select>
        </div>
        <div className="product">
          {all_product.map((item, i) => {
            if (props.category === item.category)
            {
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Items>
            }
            else
            {
              return null;
            }
          })}
        </div>
      </div>
      <button>Explore More</button>
    </div>
  )
}

export default ShopCategory
