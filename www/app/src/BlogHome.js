const db = require('./database');
import React from 'react';
import Info from './Info';


const BlogHome = () => {
    return (
        <div>
            <div id="picture">
				<a href="/blog/"><img src="../400x400Forthwind.jpg" alt="Forthwind" height="128px" width="128px" /></a>
				<h1>Forthwind's blog</h1>
				<h2>Uhhh... I tried.</h2>
			</div>
			{/* Place to add blog articles below here */}
			<div id="root">{db.getPostList()}</div>
            <Info />
        </div>);
}

export default BlogHome;