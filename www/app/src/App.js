import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <h1>Forthwind's stuff</h1>
			  <img src="400x400Forthwind.jpg" alt="Forthwind" height="320px" width="320px" />
            <div id="links">
                <a href="https://www.klforthwind.com/blog">Blog</a>
                &bull;
                <a href="https://github.com/klforthwind">Github</a>
            </div>
      </div>
    );
  }
}

export default App;
