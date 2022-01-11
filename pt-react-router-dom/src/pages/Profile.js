import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate();
    let { username } = useParams();
    return (
        <div>
            This is profile page for {username}.
            <br />
            <button onClick={() => { navigate("/about") }}>Redirect To About Page</button>
        </div>
    );
}

export default Profile;
