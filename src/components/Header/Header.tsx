import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <main className='header'>
        <img 
          src={logo} 
          alt="logo" 
          className='logo'
        />
    </main>
  );
}