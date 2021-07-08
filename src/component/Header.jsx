import React from 'react'
import Logo from "../img/logoa.png"
import { Link } from "react-router-dom"
import "../style/header.css"
import { useStateValue } from '../server/StateProvider'
import { auth } from '../server/firebase';
function Header() {
  
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <nav className="header">
            <Link to="/"><img className="header__logo" src={Logo} alt="" /></Link>
            

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="uil uil-search header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className="header__option">
                    <span className="header__optionLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className="header__optionLinetwo">
                    {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>

                
             
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLinetwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <Link to="/cart">
                        <i class="uil uil-shopping-bag  basket__option "></i>
                        <span className="header__optionLinetwo header__basketCount">{basket?.length}</span>
                    </Link>
              
                </div>
            </div>
        </nav>
    )
}


export default Header;
