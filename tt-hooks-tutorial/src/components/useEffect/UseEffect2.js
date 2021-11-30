import React, {useState, useEffect} from 'react';

const Useeffect2 = () => {

    const [width, setwidth] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setwidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return () => {
            window.removeEventListener("resize", actualWidth);
        }
    });

    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1> { width }</h1>
        </div>
    );
}

export default Useeffect2;
