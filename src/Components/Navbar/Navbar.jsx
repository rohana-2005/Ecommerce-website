import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from'../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");


  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>SHOPPER</p>
        </div>
        <div className="options">
            <ul>
                <li onClick={() => {setMenu("shop")}}><a href="#"><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</a></li>
                <li onClick={() => {setMenu("men")}}><a href="#"><Link to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}</a></li>
                <li onClick={() => {setMenu("women")}}><a href="#"><Link to='/womens'>Women</Link>{menu==="women"?<hr/>:<></>}</a></li>
                <li onClick={() => {setMenu("kids")}}><a href="#"><Link onClick={window.scrollTo(0,0)} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</a></li>
            </ul>
        </div>
        <div className="end_nav">
            <Link to='/login'><button>LogIn</button></Link>
            <Link to='/cart'><img src={cart_icon}></img></Link>
            <div className="count">0</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
