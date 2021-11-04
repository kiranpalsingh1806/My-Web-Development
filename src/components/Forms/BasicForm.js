import React, { useState } from 'react';

const Basicform = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        if(email && password) {
            const newEntry =  {id: new Date().getTime().toString(), email, password };

            setallEntry([...allEntry, newEntry]);
            console.log(allEntry);

            setemail("");
            setpassword("");
        } else {
            alert("Please fill the data.");
        }
        
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>

                <div>
                <label htmlFor="email"> Email</label>
                <input type="text" name="email" id="email" autoComplete="off"
                value={email}
                onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                <label htmlFor="pasword"> Password</label>
                <input type="password" name="password" id="password"
                value={password}
                onChange={(e)=> setpassword(e.target.value)}/>
                </div>
                

                <button type="submit">
                Login
                </button>

            </form>

            <div>
                {
                    allEntry.map((curEle)=> {
                        const {id, email, password} = curEle;
                        return(
                            <div className="showDataStyle" key={id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Basicform;
