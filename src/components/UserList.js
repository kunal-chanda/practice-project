import '../App.css';
import React from 'react';

const UserList = (props) => {
    console.log("inside UserList: ",props);
  return (
    <div className='userDiv'>
      <ul className='userDetail'>
        <li><b>Name:</b> {props.userData.name}</li>
        <li><b>Email:</b> {props.userData.email}</li>
        <li><b>City:</b> {props.userData.address?.city}</li>
      </ul>
    </div>
  )
}

export default UserList
