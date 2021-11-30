import React from 'react';

const UseStateObject = () => {
    const [myObject, setmyObject] = React.useState({
        myName: "Kiranpal", myAge:18, degree: "12"
    });
    const changeObject = () => {
        setmyObject({...myObject,
            myAge: 21,
            degree: "B.Tech"
        })
    }
    return (
        <div>
            <h1 className="h1Style">Name: {myObject.myName},
             Age: {myObject.myAge} and Degree: {myObject.degree}</h1>
            <button className="btn" onClick={changeObject} > Update </button>
        </div>
    );
}

export default UseStateObject;
