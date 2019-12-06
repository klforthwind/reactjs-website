import React from 'react';

const Info = () => {
    return (
        <div id="info">
			<p style={{ width: "100px", margin: "0 auto", background: "#333", padding: "10px 10px 0 10px" }}><a href="mailto:klforthwind@gmail.com"><img alt="Gmail" style={{width:"40px",height:"40px"}} src="./gmail-logo.png" /></a>
			<a style={{ float:"right" }} href="https://www.github.com/klforthwind"><img  alt="Github" style={{width:'40px',height:'40px'}} src="./github.png" /></a></p>
		</div>
    );
}

export default Info;