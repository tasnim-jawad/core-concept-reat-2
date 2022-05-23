import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      </header>
    </div>
  );
}
function Counter(){
  const [counter,setCounter] = useState(10);
  const handaleIncrease =() =>{
    setCounter( number =>number + 1);
  };
  const handaleDicrease =() =>{
    setCounter( number =>number - 1);
  };
  return <div>
      <h1>now i have: {counter} /-</h1>
      <button onClick ={handaleIncrease}>increase</button> <button onClick ={handaleDicrease}>dicrease</button>
  </div> 
}

export default App;
