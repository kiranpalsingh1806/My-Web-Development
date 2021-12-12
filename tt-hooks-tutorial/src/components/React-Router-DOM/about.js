import React from 'react'
import { useLocation, useHistory} from "react-router-dom";

const About = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div>
            <h1>Hello {location.pathname.replace("/", '')} page</h1>
            {
                location.pathname === '/about/Kiranpal' ? 
                    <p>Hello Kiranpal. Good to see you again</p> : 
                    <p>Login to see your files</p>
            }
            <button className="btn btn-primary"
            onClick={() => history.push('/index')}>
                Home Page
            </button>
           
        </div>
    )
}

export default About