import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from '../Assets/star_dull_icon.png';
import star_icon from '../Assets/star_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const {product} = props;
    const {add} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="product_left">
        <div className="img_4">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
        </div>
        <div className="main_img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="product_right">
            <h2>{product.name}</h2>
            <div className="star">
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_dull_icon}></img>
            <img src={star_dull_icon}></img>
            </div>
            <div className="price">
                <p id='old'>${product.old_price}</p>
                <p>${product.new_price}</p>
            </div>
            <div className="describe">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos officia quo ipsum quisquam facere reiciendis ipsa ratione fuga, libero quasi officiis fugit, earum vel et provident eos minima. Culpa!</p>
            </div>
            <div className="size">
                <p>Select Size:</p>
                <div className="size_select">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
            </div>
            <button onClick={() => {add(product.id)}} id='add'>Add to Cart</button>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
