import React, { useState } from 'react';

const Basicform = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry =  {email: email, password: password };

        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);
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
                        return(
                            <div className="showDataStyle">
                                <p>{curEle.email}</p>
                                <p>{curEle.password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Basicform;
