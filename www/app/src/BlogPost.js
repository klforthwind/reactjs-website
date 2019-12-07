// const markdown = require("markdown-js");
// import BlogHome from './BlogHome';
import React from 'react';
import Info from './Info';

const BlogPost = ({ match}) => {
    window.onload = () => {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', (e) => {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = (e) => {
					fileDisplayArea.innerText = reader.result;
				}
                console.log(file);
                let file2 = new File([""], "sampleques1.py");
                console.log(file2);
				reader.readAsText(file2);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
    }

    // let post_data = "";
    // try {
    //     let loc = "./posts/" + match.params.post + ".md";
    //     var readFile = new FileReader();
    //     readFile.onload = function(e) { 
    //         var contents = e.target.result;
    //         console.log(contents);
    //     };
    //     readFile.readAsText(loc);
    //     let result = markdown.makeHtml(post_data);
    //     post_data = result;
    // } catch(error) {
    //     return(<BlogHome />);
    // }
    return (
        <div>
        <div>
			{"Select a text file:"} 
			<input type="file" id="fileInput" />
		</div>
		<pre id="fileDisplayArea"></pre>
        <div>
            <a href="/blog/"><ul id="clickable">{"<--Back To Blog"}</ul></a><br />
            {/* <div dangerouslySetInnerHTML={{__html:post_data}} /> */}
            <Info />
        </div></div>
    );
}

export default BlogPost;