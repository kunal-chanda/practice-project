import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
import Error from './components/Error';

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false)

  const userData = async ()=> {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUsers(data);
  }

  const todoData = ()=>{
   /*  let result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();
    setTodos(data); */

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((result)=>{
      if(result.ok){
        return result.json();
      }else{
         throw new Error("Error!");
      }
    })
    .then((json)=>setTodos(json))
    .catch((error)=>setErrorStatus(true))
  }

 /*  const getUserData = ()=>{
    console.log(users);
  } */
  if(errorStatus){
    return(
      <Error />
    )
  }
  return (
    <div className="App">
      <div className='header'></div>
      <button onClick={userData}>Get User</button>
      <button onClick={todoData}>Get Todos</button>
       {users.length>0 && <div className='userList'>{users.map((user)=>(<UserList userData={user} />))}</div> }
       {todos.length>0 && <div className='userList'>{todos.map((todo)=>(<TodoList todoData={todo} />))}</div> }
    </div>
  );
}

export default App;
