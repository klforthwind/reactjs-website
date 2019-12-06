const markdown = require("markdown-js");
import BlogHome from './BlogHome';
import React from 'react';
import Info from './Info';
const fs = require("fs");

const BlogPost = ({ match}) => {
    let post_data = "";
    let loc = "posts/" + match.params.post + ".md";
    console.log(loc);
    try {
        let str = fs.readFileSync(loc, "utf8");
        let result = markdown.makeHtml(str);
        post_data = result;
    } catch(error) {
        console.log('yikes');
        return(<BlogHome />);
    }
    return (
        <div>
            <a href="/blog/"><ul id="clickable">{"<--Back To Blog"}</ul></a><br />
            <div dangerouslySetInnerHTML={{__html:post_data}} />
            <Info />
        </div>
    );
}

export default BlogPost;