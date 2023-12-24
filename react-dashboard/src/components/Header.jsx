import React from 'react'
import '../css/header.css'
import { IoSearch } from "react-icons/io5";

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
        <div className='calender__date'></div>
        <div className='notification'></div>
        <div className='user__profile'>
          <div></div>
        </div>
      </div>
    </div>
  )
}
