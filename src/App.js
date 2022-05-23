import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Usersall></Usersall>
      </header>
    </div>
  );
}


function Counter(){
  const [counter,setCounter] = useState(10);

  const handaleIncrease =() =>{
    setCounter( previousNumber =>previousNumber + 1);
  };

  const handaleDicrease =() =>{
    setCounter( previousNumber =>previousNumber - 1);
  };
  return <div>
      <h1>now i have: {counter} /-</h1>
      <button onClick ={handaleIncrease}>increase</button> <button onClick ={handaleDicrease}>dicrease</button>
  </div> 
}

function Usersall(){
  const [user,setUser] =useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  },[])
  console.log(user);
  return <div>
            <h1>user list printing: {user.length}</h1>
            {
              user.map(allInfo =><p>{allInfo.name}</p>)
            }
          </div>
}



export default App;
