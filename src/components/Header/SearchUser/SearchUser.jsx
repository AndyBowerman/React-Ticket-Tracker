import React, { useState } from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {

  const {searchUser} = props;

  const [expandSearchUser, setExpandSearchUser] = useState(false);

  const handleSearchUserClick = () => setExpandSearchUser(!expandSearchUser);

  // Handle the data entered
  let [searchUserName, setSearchUserName] = useState('');
  const handleNameEntry = (e) => setSearchUserName(e.target.value.toLowerCase());
  let [searchJobTitle, setSearchJobTitle] = useState('');
  const handleJobEntry = (e) => setSearchJobTitle(e.target.value.toLowerCase());

  return (
    <div className="searchUser">
        {!expandSearchUser && <button className="searchUser__expand" onClick={handleSearchUserClick}>Search</button>}
        {expandSearchUser && <div className="searchUser__container">
            <div className="searchUser__close">
                <p className="searchUser__close--text" onClick={handleSearchUserClick}>X</p>
            </div>
            <input type="text" placeholder="Search By Name" className="searchUser__name" onChange={handleNameEntry} />
            <input type="text" placeholder='Search By Job Title' className="searchUser__job" onChange={handleJobEntry} />
            <button className='searchUser__create' onClick={() => searchUser(searchUserName, searchJobTitle)}>Search</button>
        </div>}
    </div>
  )
}

export default SearchUser