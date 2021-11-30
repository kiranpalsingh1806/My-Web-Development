import React, {useState, useEffect} from 'react';

const Useeffect1 = () => {

    const [count, setcount] = useState(0);

    useEffect(() => {
        if(count >= 1) {
            document.title = `Chats (${count})`
        } else {
            document.title = `Chats `
        }       
    },[count]);

    console.log("Hello  outside UseEffect");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setcount(count+ 1)}>Click Me </button>
        </div>
    );
}

export default Useeffect1;
