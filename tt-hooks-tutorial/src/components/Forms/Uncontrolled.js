import React, {useRef, useState} from 'react';

const Uncontrolled = () => {

    const luckyName = useRef(null);
    const [show, setshow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(luckyName.current.value);
        const name = luckyName.current.value;
        name === "" ? alert("Please fill the data") : setshow(true);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyname"> Enter your Lucky Name</label>
                    <input type="text" id="luckyName" ref={ luckyName }/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <p>
                { show ? `Your lucky name is ${luckyName.current.value}` : "" }
            </p>
        </div>
    );
}

export default Uncontrolled;
