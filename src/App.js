import React, {useState} from 'react';
import './App.css';

const App = () => {
  
  const  [myName, setMyName ] = useState('Kiranpal Singh');

  const changeName = () => {
    
    let val = myName;
    if(val ==="Kiranpal Singh") {
      setMyName("Name replaced");
    }  
    else {
      setMyName("Kiranpal Singh")
    }
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
