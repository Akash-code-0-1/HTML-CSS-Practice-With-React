import React from 'react';
import SourceCodeContainer from './SourceCodeContainer';
import './Layout.css';

export default function Layout() {
    const sourceCode = {
        html: `
    <div className="layout">
        <main>
            <aside aria-label="Sidebar Navigation">
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#london" className="active">London</a></li>
                    <li><a href="#paris">Paris</a></li>
                    <li><a href="#tokyo">Tokyo</a></li>
                </ul>
            </aside>
    
            <article>
                <h1 id="london">London</h1>
                <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London" />
                <p>
                    London is the capital of England. It’s a bustling hub of culture, history,
                    and modernity, standing proud on the River Thames.
                </p>
    
                <h1 id="paris">Paris</h1>
                <img src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris" />
                <p>
                    Known as the "City of Light," Paris is renowned for its art, fashion,
                    and landmarks such as the Eiffel Tower and the Louvre.
                </p>
    
                <h1 id="tokyo">Tokyo</h1>
                <img src="https://images.pexels.com/photos/20891131/pexels-photo-20891131/free-photo-of-young-woman-in-a-midi-skirt-standing-on-one-leg.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tokyo" />
                <p>
                    Tokyo, the capital of Japan, offers a unique mix of ultramodern skyscrapers
                    and historic temples, making it a cultural hotspot.
                </p>
            </article>
        </main>
    
        <footer>
            <p>&copy; 2024 Explore Cities | All Rights Reserved</p>
            <div className="social-icons">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </footer>
    </div>
        `,
        css: `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9;
        color: #333;
        line-height: 1.6;
    }
    
    /* Layout styles */
    .layout {
        display: flex;
        flex-direction: column;
    }
    
    /* Main section */
    main {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        flex: 1;
        gap: 20px;
    }
    
    /* Sidebar */
    aside {
        flex: 1;
        max-width: 300px;
        background-color: #333;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        position: sticky;
        top: 20px;
        height: fit-content;
    }
    
    aside h2 {
        font-size: 20px;
        margin-bottom: 15px;
        border-bottom: 2px solid #ffcc00;
        padding-bottom: 5px;
    }
    
    aside ul {
        list-style: none;
        padding: 0;
    }
    
    aside ul li {
        margin: 10px 0;
    }
    
    aside ul li a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: color 0.3s;
    }
    
    aside ul li a:hover,
    aside ul li a.active {
        color: #ffcc00;
    }
    
    /* Article */
    article {
        flex: 3;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    article h1 {
        font-size: 24px;
        color: #004aad;
        margin-bottom: 10px;
    }
    
    article img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 15px 0;
    }
    
    article p {
        margin-bottom: 15px;
        color: #555;
        line-height: 1.8;
    }
    
    /* Footer */
    .layout footer {
        background-color: #004aad;
        color: #fff;
        text-align: center;
    }
    
    footer p {
        margin-bottom: 10px;
    }
    
    .layout footer .social-icons {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    
    .layout footer .social-icons a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
    }
    
    .layout footer .social-icons a:hover {
        color: #ffcc00;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        main {
            flex-direction: column;
        }
    
        aside {
            margin-bottom: 20px;
            max-width: 100%;
        }
    }
        `
    };


    return (
        <SourceCodeContainer sourceCode={sourceCode}>
            <div className="layout">
                <main>
                    <aside aria-label="Sidebar Navigation">
                        <h2>Navigation</h2>
                        <ul>
                            <li><a href="#london" className="active">London</a></li>
                            <li><a href="#paris">Paris</a></li>
                            <li><a href="#tokyo">Tokyo</a></li>
                        </ul>
                    </aside>

                    <article>
                        <h1 id="london">London</h1>
                        <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London" />
                        <p>
                            London is the capital of England. It’s a bustling hub of culture, history,
                            and modernity, standing proud on the River Thames.
                        </p>

                        <h1 id="paris">Paris</h1>
                        <img src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris" />
                        <p>
                            Known as the "City of Light," Paris is renowned for its art, fashion,
                            and landmarks such as the Eiffel Tower and the Louvre.
                        </p>

                        <h1 id="tokyo">Tokyo</h1>
                        <img src="https://images.pexels.com/photos/20891131/pexels-photo-20891131/free-photo-of-young-woman-in-a-midi-skirt-standing-on-one-leg.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Tokyo" />
                        <p>
                            Tokyo, the capital of Japan, offers a unique mix of ultramodern skyscrapers
                            and historic temples, making it a cultural hotspot.
                        </p>
                    </article>
                </main>

                <footer>
                    <p>&copy; 2024 Explore Cities | All Rights Reserved</p>
                    <div className="social-icons">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </footer>
            </div>


        </SourceCodeContainer>
    );
}
