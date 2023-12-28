import React from 'react'
import '../css/header.css'
import { IoSearch } from "react-icons/io5";
import DatePickerValue from '../library/DatePickerValue';
import { IoMdNotificationsOutline } from "react-icons/io";
import image from '../ImageImporter';

export default function Header(user) {
  return (
    <div className='header__wrapper'>
      <div className='search__box'>
        <form>
          <input type="text" name='searchSomething' placeholder='Search Something' />

          <button>
            <IoSearch className='search__icon'/>
          </button>
        </form>
      </div>

      <div className='highlight__icon'>
        <div className='calender__date'>
          {/* <DatePickerValue/> */}
        </div>
        <div className='notification'>
          {/* <div className='notification__number'>9+</div> */}
          <IoMdNotificationsOutline className="notification__icon"/>
        </div>
        <div className='user__profile'>
          <img src={image.RRG_User} alt="User Profile" />
        </div>
      </div>
    </div>
  )
}
