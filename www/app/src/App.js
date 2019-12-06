import { Switch, Route } from "react-router-dom";
import BlogHome from './BlogHome';
import BlogPost from './BlogPost';
import React from 'react';
import Home from './Home';

const App = () => {
    return (
        <div className="App"> 

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blog/' component={BlogHome}/>
          <Route exact path="/blog/:post" component={BlogPost}/>
        </Switch>
        </div>
    );
}

export default App;
