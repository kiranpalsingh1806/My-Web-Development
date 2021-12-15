import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./nav";
import About from "./about";
import Index from "./index";
import Login from './login';


const Home = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/index">
                <Index />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </BrowserRouter>
    )
}

export default Home