import React from 'react';
import './main.css';
import './style.css';

const App = () => {
    return (
        <section id="container"> 
            <h1>Forthwind's stuff</h1>
            <img src="400x400Forthwind.jpg" alt="Forthwind" height="320px" width="320px" />
            <div id="links">
                <a href="https://www.klforthwind.com/blog">Blog</a>
                &bull;
                <a href="https://github.com/klforthwind">Github</a>
            </div>
        </section>
    );
}

export default App;
