import React, { useState } from 'react';
import './AddUser.scss';

const AddUser = ({createUser}) => {

  let [expandAddUser, setExpandAddUser] = useState(false);
  let [userName, setUserName] = useState('');
  let [jobTitle, setJobTitle] = useState('');

  const handleAddUserClick = () => setExpandAddUser(!expandAddUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userName, jobTitle);
    setUserName('');
    setJobTitle('');
  }

  return (
    <div className="addUser">
        {!expandAddUser && <button className="addUser__expand" onClick={handleAddUserClick}>Add New User</button>}
        {expandAddUser && <div className="addUser__container">
            <button className="addUser__close" onClick={handleAddUserClick}>Close</button>
            <form action="#" className='addUser__form' onSubmit={handleSubmit}>
              <input 
                type="text"
                placeholder="Enter Name"
                className="addUser__input"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
              <input
                type="text"
                placeholder='Job Title'
                className="addUser__input"
                onChange={(e) => setJobTitle(e.target.value)}
                value={jobTitle}
              />
              <button type="submit" className='addUser__create'>Create New User</button>
            </form>
            
        </div>}
    </div>
  )
}

export default AddUser