import new_collections from '../Assets/new_collections';
import React from 'react';
import Items from '../Items/Items';
import './NewCollection.css';


const NewCollection = () => {
  return (
    <div className='newCollection'>
      <h1>New Collections</h1>
      <hr/>
      <div className="new_item">
        {new_collections.map((item, i) => {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Items>
        })}
      </div>
    </div>
  )
}

export default NewCollection
