import React, { useState } from 'react';
import './AddUser.scss';

const AddUser = () => {

  const [expandAddUser, setExpandAddUser] = useState(true);

  const handleAddUserClick = () => setExpandAddUser(!expandAddUser);

  return (
    <div className="addUser">
        {!expandAddUser && <button className="addUser__expand" onClick={handleAddUserClick}>Add New User</button>}
        {expandAddUser && <div className="addUser__container">
            <div className="addUser__close">
                <p className="addUser__close--text" onClick={handleAddUserClick}>X</p>
            </div>
            <input type="text" placeholder="Enter Name" className="addUser__name" />
            <input type="text" placeholder='Job Title' className="addUser__job" />
            <button className='addUser__create'>Create New User</button>
        </div>}
    </div>
  )
}

export default AddUser