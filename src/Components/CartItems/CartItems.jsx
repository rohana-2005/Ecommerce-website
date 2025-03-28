import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import cross_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {all_product, cartItem, removeCart } = useContext(ShopContext);

  return (
    <div>
      <div className="cart1">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div key={product.id} className="format">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className="quantity">{cartItem[product.id]}</button>
              <p>${product.new_price * cartItem[product.id]}</p>
              <img
                src={cross_icon}
                alt="remove"
                onClick={() => removeCart(product.id)}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
