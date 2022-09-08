import React, { useState } from 'react';
import './SearchUser.scss';

const SearchUser = () => {

  const [expandSearchUser, setExpandSearchUser] = useState(false);

  const handleSearchUserClick = () => setExpandSearchUser(!expandSearchUser);

  return (
    <div className="searchUser">
        {!expandSearchUser && <button className="searchUser__expand" onClick={handleSearchUserClick}>Search</button>}
        {expandSearchUser && <div className="searchUser__container">
            <div className="searchUser__close">
                <p className="searchUser__close--text" onClick={handleSearchUserClick}>X</p>
            </div>
            <input type="text" placeholder="Search By Name" className="searchUser__name" />
            <input type="text" placeholder='Search By Job Title' className="searchUser__job" />
            <button className='searchUser__create'>Search</button>
        </div>}
    </div>
  )
}

export default SearchUser