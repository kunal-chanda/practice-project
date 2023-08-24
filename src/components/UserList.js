import React from 'react'

const UserList = (props) => {
    console.log("inside UserList: ",props);
  return (
    <div className='userList'>
      <ul>
        <li>{props.userData.name}</li>
        <li>{props.userData.email}</li>
        <li>{props.userData.address?.city}</li>
      </ul>
    </div>
  )
}

export default UserList
