import React from 'react';
import '../css/home.css';
import GuestNavbar from '../components/GuestBar';
import image from '../ImageImporter';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
      <div className='home__container'>
        <div className="home__section-hero">
          <h2>Welcome to <span>RRG CITY</span></h2>
        </div>

        <div className="home__navigation">
          <div className='nav__circle'>
            <Link to="/dashboard" className='nav__link'>Dashboard</Link>
          </div>
          <div className='nav__circle'>
            <Link className='nav__link'>Management</Link>
          </div>
          <div className='nav__circle'>
            <Link className='nav__link'>Reporting</Link>
          </div>
          <div className='nav__circle'>
            <Link className='nav__link'>Consultan</Link>
          </div>
          <div className='nav__circle'>
            <Link className='nav__link'>HelpDesk</Link>
          </div>
        </div>
      </div>
  )
}
