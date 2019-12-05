import React from 'react';
import Links from './Links';
import logo from './400x400Forthwind.jpg'
import './main.css';
import './style.css';

const App = () => {
    return (
        <section id="container"> 
            <h1>Forthwind's stuff</h1>
            <img src={logo} alt="Forthwind" height="320px" width="320px" />
            <Links />
        </section>
    );
}

export default App;
