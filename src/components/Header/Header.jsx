import React from 'react'
import './Header.scss'
import AddUser from './AddUser/AddUser';
import SearchUser from './SearchUser/SearchUser';

const Header = (props) => {

  const {createUser, searchByName, searchByJob} = props;

  return (
    <header className='header'>
        <h1 className="header__text">Ticket Tracker</h1>
        <div className='header__buttons'>
          <AddUser createUser={createUser} />
          <SearchUser searchByName={searchByName} searchByJob={searchByJob} />
        </div>
    </header>
  )
}

export default Header