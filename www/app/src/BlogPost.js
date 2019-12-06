const markdown = require("markdown-js");
import BlogHome from './BlogHome';
import React from 'react';
import Info from './Info';
const fs = require("fs");

const BlogPost = ({ match}) => {
    let post_data = "";
    const { params: { location } } = match;
    let loc = "posts/" + { location } + ".md";
    try {
        let str = fs.readFileSync(loc, "utf8");
        let result = markdown.makeHtml(str);
        post_data = result;
    } catch(error) {
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