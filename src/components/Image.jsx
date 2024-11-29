import React from 'react';
import SourceCodeContainer from './SourceCodeContainer';
import './Image.css';

export default function Image() {
    const sourceCode = {
        html: `
    <div className='img_tag'>
        <div className="images">
            <img src="https://images.pexels.com/photos/18030924/pexels-photo-18030924/free-photo-of-pigeon-perching-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="error loading image" />
            <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="error loading image" />
            <img src="https://images.pexels.com/photos/573298/pexels-photo-573298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="error loading image" />
            <img src="https://images.pexels.com/photos/18030924/pexels-photo-18030924/free-photo-of-pigeon-perching-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="error loading image" />
        </div>
    
        <div className="with_bg_img">
            <div className="image">
                <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/713959/pexels-photo-713959.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/1652117/pexels-photo-1652117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600" alt="Image 5" />
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 6" />
            </div>
        </div>
    </div>
        `,
        css: `
    .img_tag {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .img_tag .images {
        display: flex;
        justify-content: space-around;
    }
    
    .img_tag .images img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 5px;
    }
    
    .img_tag .with_bg_img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; /* Allow images to wrap to the next line */
        position: relative;
        padding: 20px;
        margin: 20px auto;
        width: 90%;
        border-radius: 5px;
        overflow: hidden; /* Prevents blur from spilling outside */
    }
    
    .img_tag .with_bg_img::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px); /* Apply blur only to the pseudo-element (background) */
        z-index: 1;
    }
    
    .img_tag .with_bg_img > .image {
        position: relative;
        z-index: 2; /* Ensure images stay above the blurred background */
        margin: 10px; /* Add space between images */
        height: 100px;
        width: 100px;
        display: flex;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .img_tag .with_bg_img > .image img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
        `
    };
    

    return (
        <SourceCodeContainer sourceCode={sourceCode}>
            <div className='img_tag'>
                <div className="images">
                    <img src="https://images.pexels.com/photos/18030924/pexels-photo-18030924/free-photo-of-pigeon-perching-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="error loading image" />
                    <img src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600" alt="error loading image" />
                    <img src="https://images.pexels.com/photos/573298/pexels-photo-573298.jpeg?auto=compress&cs=tinysrgb&w=600" alt="error loading image" />
                    <img src="https://images.pexels.com/photos/18030924/pexels-photo-18030924/free-photo-of-pigeon-perching-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="error loading image" />
                </div>

                <div className="with_bg_img">
                    <div className="image">
                        <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/713959/pexels-photo-713959.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/1652117/pexels-photo-1652117.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="image">
                        <img src="https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>


                </div>
            </div>

        </SourceCodeContainer>
    );
}
