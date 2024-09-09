import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import sampleImage from '../assets/medium image.webp';

const home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1 className="logo">Medium</h1>
                    <nav className="header-nav">
                        <ul>
                            <li><Link to="/our-story" className="nav-button">Our Story</Link></li>
                            <li><Link to="/membership" className="nav-button">Membership</Link></li>
                            <li><Link to="/write" className="nav-button">Write</Link></li>
                            <li><Link to="/join" className="nav-button">Sign In</Link></li>
                            <Link to="/join"><button className="get-started-btn">Get Started</button>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="home-main">
                <div className="text-content">
                    <h2 className="main-title">Human</h2>
                    <p className="sub-title">Stories & ideas</p>
                    <p className="description">A place to read, write, and deepen your understanding</p>
                    <button className="start-reading-btn">Start Reading</button>
                </div>
                <div className="image-content">
                    <img src={sampleImage} alt="Human Stories" />
                </div>
            </section>

            <footer className="home-footer">
                <div className="footer-links">
                    <a href="#help">Help</a>
                    <a href="#status">Status</a>
                    <a href="#about">About</a>
                    <a href="#careers">Careers</a>
                    <a href="#press">Press</a>
                    <a href="#blog">Blog</a>
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                    <a href="#text-to-speech">Text to Speech</a>
                    <a href="#teams">Teams</a>
                </div>
            </footer>
        </div>
    );
};

export default home;
