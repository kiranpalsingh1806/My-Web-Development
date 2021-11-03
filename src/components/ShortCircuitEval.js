import React, {useState} from 'react';

const Shortcircuiteval = () => {
    const [demo, setdemo] = useState("Kiranpal");

    return (
        <div>
            <h1 className="h1Style">{demo ||
                    <>
                        <h1> Myname </h1>
                        <p> Right </p>
                    </>
            }</h1>
            <h1 className="h1Style"> {demo && "Singh"}</h1>
        </div>
    );
}

export default Shortcircuiteval;
