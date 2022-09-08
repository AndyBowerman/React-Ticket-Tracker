import React, { useState } from 'react';
import './AddUser.scss';

const AddUser = (props) => {

/*
Like the projects, not keen on double lessons
Like the lessons, code alongs make them much better
Challenges break up the lessons make them more interactive



*/





  const {createUser} = props;

  // Expand and hide the input boxes.
  let [expandAddUser, setExpandAddUser] = useState(false);
  const handleAddUserClick = () => setExpandAddUser(!expandAddUser);

  // Handle the data entered
  let [userName, setUserName] = useState('');
  const handleNameEntry = (e) => setUserName(e.target.value);
  let [jobTitle, setJobTitle] = useState('');
  const handleJobEntry = (e) => setJobTitle(e.target.value);


  return (
    <div className="addUser">
        {!expandAddUser && <button className="addUser__expand" onClick={handleAddUserClick}>Add New User</button>}
        {expandAddUser && <div className="addUser__container">
            <div className="addUser__close">
                <p className="addUser__close--text" onClick={handleAddUserClick}>X</p>
            </div>
            <input type="text" placeholder="Enter Name" className="addUser__name" onChange={handleNameEntry} />
            <input type="text" placeholder='Job Title' className="addUser__job" onChange={handleJobEntry} />
            <button className='addUser__create' onClick={() => createUser(userName, jobTitle)}>Create New User</button>
        </div>}
    </div>
  )
}

export default AddUser