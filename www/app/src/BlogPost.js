const markdown = require("markdown-js");
import BlogHome from './BlogHome';
import React from 'react';
import Info from './Info';

const BlogPost = ({ match}) => {
    let post_data = "";
    try {
        let loc = "https://www.klforthwind.com/blog/posts/" + match.params.post + ".md";
        fetch(loc)
        .then((r) => r.text())
        .then(text  => {
        post_data = text;
        });  
        post_data = markdown.makeHtml(post_data);
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