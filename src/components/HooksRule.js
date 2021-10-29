import React, { useState } from 'react';

/* Hooks Rules */
// Always write hooks inside the component or function
// Component name must be PascalCase
// We can either import useState or can use React.useState 
// Don't call Hooks inside loops, conditions, or nested functions.
// But we can call hook variable in loops, conditions and nested functions.s

const HooksRule = () => {
    const [myName, setmyName] = useState("Kiranpal Singh");
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    );
}

export default HooksRule;
