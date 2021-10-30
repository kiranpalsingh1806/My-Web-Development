import React, {useState} from 'react';

const UseStateArray = () => {

    const bioData = [
        {
            id:0, myName:"Tomato", quant:20
        }, {
            id: 1, myName:"Onion", quant:17
        }, {
            id:2, myName:"Cabbage", quant:23
        }, {
            id:3, myName:"Salt", quant:14
        }
    ]

    const [myArray, setmyArray] = useState(bioData);

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElem = (id) => {
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id !== id;
        })

        setmyArray(myNewArray);
    }
    return (
        <>
        {
            myArray.map((curEle) => {
                return (
                    <h1 className="h1Style" key={curEle.id}> 
                    Bring {curEle.myName} 
                    . of quantity {curEle.quant}
                    <button className="btnInner"
                            onClick={() =>removeElem(curEle.id)}>Remove</button></h1>
                ); 
            })
        }
        <button className="btn" onClick ={clearArray} >Clear </button>
        </>
    );
}

export default UseStateArray;
