import React from 'react';
import SourceCodeContainer from './SourceCodeContainer';
import './Media.css';

export default function Media() {
    const sourceCode = {
        html: `
            <div className='media_tag'>
                <div className="media">
                    <audio controls>
                        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                    </audio>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                </div>
    
                <div className="with_bg_media">
                    <div className="media-item">
                        <audio controls>
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="media-item">
                        <video width="320" height="240" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="media-item">
                        <audio controls>
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="media-item">
                        <video width="320" height="240" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        `,
        css: `
            .media_tag {
                padding: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px;
            }
    
            .media_tag .media {
                display: flex;
                justify-content: space-around;
            }
    
            .media_tag .media audio, 
            .media_tag .media video {
                height: 100px;
                width: 100px;
                object-fit: cover;
                border-radius: 5px;
            }
    
            .media_tag .with_bg_media {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap; /* Allow media items to wrap to the next line */
                position: relative;
                padding: 20px;
                margin: 20px auto;
                width: 90%;
                border-radius: 5px;
                overflow: hidden; /* Prevents blur from spilling outside */
            }
    
            .media_tag .with_bg_media::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=600");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                filter: blur(4px); /* Apply blur only to the pseudo-element (background) */
                z-index: 1;
            }
    
            .media_tag .with_bg_media > .media-item {
                position: relative;
                z-index: 2; /* Ensure media items stay above the blurred background */
                margin: 10px; /* Add space between media items */
                height: 100px;
                width: 100px;
                display: flex;
                border-radius: 5px;
                overflow: hidden;
            }
    
            .media_tag .with_bg_media > .media-item audio, 
            .media_tag .with_bg_media > .media-item video {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        `
    };
    


    return (
        <SourceCodeContainer sourceCode={sourceCode}>
            <div className='media_tag'>
                <div className="media">
                    <audio controls>
                        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                    </audio>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="with_bg_media">
                    <div className="media-item">
                        <audio controls>
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="media-item">
                        <video width="320" height="240" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="media-item">
                        <audio controls>
                            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="media-item">
                        <video width="320" height="240" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>



        </SourceCodeContainer>
    );
}
