import React from 'react';
import Links from './Links';
import './main.css';
import './style.css';

const App = () => {
    return (
        <section id="container"> 
            <h1>Forthwind's stuff</h1>
            <img src="400x400Forthwind.jpg" alt="Forthwind" height="320px" width="320px" />
            <Links />
        </section>
    );
}

export default App;
