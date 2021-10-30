import React, {useState} from 'react';

const UseStateArray = () => {

    const bioData = [
        {
            id:0, myName:"Kiranpal", age:20
        }, {
            id: 1, myName:"Amanpal", age:17
        }, {
            id:2, myName:"John", age:23
        }, {
            id:3, myName:"Jerry", age:14
        }
    ]

    const [myArray, setmyArray] = useState(bioData);

    const clearArray = () => {
        setmyArray([]);
    }
    return (
        <>
            {
                myArray.map((curEle) => {
                    return <h1 className="h1Style" key={curEle.id}> Name: {curEle.myName}
                     , Age: {curEle.age}</h1>
                })
            }
            <button className="btn" onClick ={clearArray} >Clear </button>
        </>
    );
}

export default UseStateArray;
