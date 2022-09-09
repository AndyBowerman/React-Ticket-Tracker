import React, { useState } from 'react';
import './SearchUser.scss';

const SearchUser = (props) => {
  const {searchByName, searchByJob} = props;

  const [expandSearchUser, setExpandSearchUser] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [searchJob, setSearchJob] = useState('');
  
  const handleSearchUserClick = () => setExpandSearchUser(!expandSearchUser);

  const handleNameSearch = (e) => {
    setSearchName(e.target.value);
    searchByName(searchName);
  }

  const handleJobSearch = (e) => {
    setSearchJob(e.target.value);
    searchByJob(searchJob)
  }

  return (
    <div className="searchUser">
        {!expandSearchUser && <button className="searchUser__expand" onClick={handleSearchUserClick}>Search</button>}
        {expandSearchUser && <div className="searchUser__container">
            <button className="searchUser__close" onClick={handleSearchUserClick}>Close</button>        
            <input
              type="text"
              placeholder="Search By Name"
              className="searchUser__name"
              onChange={handleNameSearch}
            />
            <input
              type="text"
              placeholder='Search By Job Title'
              className="searchUser__job"
              onChange={handleJobSearch}
            />
        </div>}
    </div>
  )
}

export default SearchUser