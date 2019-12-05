import React from 'react';
import Links from './Links';
import logo from './400x400Forthwind.jpg'
import './main.css';
import './style.css';

const App = () => {
    return (
        <div className="App"> 
            <h1>Forthwind's stuff</h1>
            <img src={logo} alt="Forthwind" height="320px" width="320px" />
            <Links />
        </div>
    );
}

export default App;
