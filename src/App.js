import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
  /*   fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(json=> console.log(json)) */
    userData();
  })
  const userData = async ()=> {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUsers(data);
  }

  const getUserData = ()=>{
    console.log(users);
  }
  return (
    <div className="App">
      <div className='header'></div>
      <button onClick={getUserData}>Get User</button>
      <button>Get Todos</button>
       {/* <div>{users.map((user)=><UserList userData={user} />)}</div> */}
    </div>
  );
}

export default App;
