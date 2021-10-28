import React, {useState} from 'react';
import './App.css';

const App = () => {

  var val = "Kiranpal Singh";
  var check = true;
  
  const  [myName, setMyName ] = useState('Kiranpal Singh');

  const changeName = () => {
      setMyName("Name replaced");
  }

  return (
    <div>
      <h1>
        {myName}
      </h1>
      <button className="btn" onClick={changeName}>Click Me</button>
    </div>
  );
}

export default App;
