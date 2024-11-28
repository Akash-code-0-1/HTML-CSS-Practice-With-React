import React from 'react';
import SourceCodeContainer from './SourceCodeContainer';
import './Paragraph.css';

export default function Paragraph() {
    const sourceCode = {
        html: `
<div className='p_tag'>
    <h2>Paragraph Tag</h2>
    <p>
        Lorem ipsum dolor sit, amet consectetur <b>You can bold text using b tag</b> elit. 
        Ad vitae unde illo sint alias necessitatibus fugiat! 
        <i>You can make text italic font using <b>i</b> tag</i> 
        Est illo omnis <a href="#">you can link to another URL or destination by <b>a</b> tag</a> 
        ipsum sint modi, dicta aut expedita labore, qui ipsam voluptates autem?
    </p>
</div>
        `,
        css: `
.p_tag {
    padding: 5px;
}

.p_tag h2 {
    /* padding-bottom: 10px; */
    margin-bottom: 15px;
}

.p_tag p {
    color: black;
    font-size: 18px; /* Change font size of the paragraph using font-size property */
}

.p_tag p a {
    text-decoration: none;
}
        `
    };

    return (
        <SourceCodeContainer sourceCode={sourceCode}>
            <div className="p_tag">
                <h2>Paragraph Tag</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur 
                    <b> You can bold text using b tag</b> elit. Ad vitae unde illo sint alias necessitatibus fugiat! 
                    <i>You can make text italic font using <b>i</b> tag</i> 
                    Est illo omnis 
                    <a href="#"> you can link to another URL or destination by <b>a</b> tag</a> 
                    ipsum sint modi, dicta aut expedita labore, qui ipsam voluptates autem?
                </p>
            </div>
        </SourceCodeContainer>
    );
}
