import logo from './400x400Forthwind.jpg';
import Links from './Links';
import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div>
            <h1>Forthwind's stuff</h1>
            <img src={logo} alt="Forthwind" height="320px" width="320px" />
            <Links />
        </div>
    );
}

export default Home;