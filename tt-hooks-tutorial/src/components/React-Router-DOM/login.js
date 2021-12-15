import React from 'react';
import './test.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const diffToast = () => {
        toast.success("Login successful" , {
            position: "top-center",
        });
        toast.warn("Login unsuccessful" , {
            position: "bottom-center",
        });
    }
    return (
        <>
            <div className='main-div'>
                <h2>Welcome to Sign In Page</h2>
                <button className='btn btn-primary'
                        onClick={diffToast}>Log In</button>
            </div>
            <ToastContainer/>
        </>
    );
}

export default Login;
