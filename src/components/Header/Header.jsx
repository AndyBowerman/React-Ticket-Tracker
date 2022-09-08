import React from 'react'
import './Header.scss'
import AddUser from './AddUser/AddUser';
import SearchUser from './SearchUser/SearchUser';

const Header = () => {
  return (
    <header className='header'>
        <h1 className="header__text">Ticket Tracker</h1>
        <div className='header__buttons'>
          <AddUser />
          <SearchUser />
        </div>
    </header>
  )
}

export default Header