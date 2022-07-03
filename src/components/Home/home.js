import React, { Component } from 'react';
import './home.css';
import linkedInLogo from '../../assets/images/LinkedIN.svg';
import mememoji2 from '../../assets/images/mememoji2.svg';



class Home extends Component {
    render() {
        return (
            <div className="container">
                {/* Main Section - what user sees when they first visit website. */}
                <section className='main'>
                    {/* Navigation Bar */}
                    <nav className="navbar navbar-expand-lg py-4 navbar-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={mememoji2} alt={'mememoji of me in clouds'} width="120" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item pe-4">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item pe-4">
                                        <a className="nav-link" href="#">Resume</a>
                                    </li>
                                    <li className="nav-item pe-4">
                                        <a className="nav-link" href="#">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Introduction */}
                    <div className="jumbotron mt-5 py-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <p className='mt-5 pt-5 text-center intro-text'>Hey, my name is Kane!</p>
                                    <p className='text-center intro-text'>I'm a <span>Full-Stack Developer.</span></p>
                                    <p className='mt-3 text-center'>I'm also a designer, who enjoys creating functional but eye catching apps! </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='scroll-indicator'>
                        <span className="mouse">
                            <span className="mouse-wheel"></span>
                        </span>
                    </div>

                </section>

                {/* About Section */}
                <section id="about" className="">
                </section>

                {/* Projects Section */}
                <section></section>

                {/* Contact Section */}
                <section id="contact" className="py-5 mb-5 contact-section">
                    <div className="container">
                        <h1 className="text-center intro-text">I'm open to new possibilities!</h1>
                        <p className="mt-3 text-center">Feel free to contact me by clicking on the button below or connecting with me via LinkedIn!</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary btn-lg mt-3">Contact Me</button>
                        </div>
                        {/* <p className="mt-3 text-center">or</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/kanetoomer/" className="btn btn-primary btn-lg mt-3 linkedIn">
                                <img src={linkedInLogo} alt={'linked in logo'} />
                            </a>
                        </div> */}
                    </div>
                </section>

                {/* Footer */}
                <footer>

                </footer>
            </div >
        );
    }
}

export default Home;