import React from 'react';
import { Basket, Logo, Profile } from '../../assets';
import { HeaderProps } from '../../types';
import './Header.css';

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <header>
      <img src={Logo} className="shop_logo" alt="logo"/>
      <a>Home</a>
      <a>About Us</a>
      <a>Our Lands</a>
      <a>Our Suppliers</a>
      <a>Products</a>
      <a>Contact Us</a>
      <div className="shop_users_block">
        <img src={Basket} className="shop_basket" alt="basket"/>
        <img src={Profile} className="profile" alt="profile"/>
      </div>
      </header>
    </div>
  );
};

export default Header;
