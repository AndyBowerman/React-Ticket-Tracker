import React from 'react'
import './Header.scss'
import AddUser from './AddUser/AddUser';
import SearchUser from './SearchUser/SearchUser';

const Header = (props) => {

  const {createUser, searchUser} = props;

  return (
    <header className='header'>
        <h1 className="header__text">Ticket Tracker</h1>
        <div className='header__buttons'>
          <AddUser createUser={createUser} />
          <SearchUser searchUser={searchUser} />
        </div>
    </header>
  )
}

export default Header