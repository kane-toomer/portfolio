import React, { Component } from 'react';
import './home.css';
import Contact from '../Contact/contact.js';
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
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item pe-4">
                                        <a className="nav-link" href="#">Resume</a>
                                    </li>
                                    <li className="nav-item pe-4">
                                        <a className="nav-link" href="#projects">Projects</a>
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
                                    <p className='text-center intro-text'>I'm a Software Developer.</p>
                                    {/* <p className='mt-3 text-center'>I'm also an educator and lover of all things start ups!</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 150 }}>
                        <p className="text-center">Scroll Down</p>
                        <div className='scroll-indicator'>
                            <span className="mouse">
                                <span className="mouse-wheel"></span>
                            </span>
                        </div>
                    </div>

                </section>

                {/* Projects Section */}
                <section id="projects" className='py-5 mb-5'>
                    {/* Pill */}
                    <div>
                        <h1 className="intro-text text-center mb-5 pb-5">Projects</h1>
                    </div>
                    {/* Project 1 */}
                    <div className='container-fluid project-section'>
                        <div className='row'>
                            <div className='col-6'>

                            </div>
                            <div className='col-6'>
                                <div className='project-card'>
                                    <h2 className='text-white text-center mb-4'>Zovy</h2>
                                    <p><span className='card-titles'>About:</span></p>
                                    <p><span className='card-titles'>Organization:</span> Personal Project</p>
                                    <p><span className='card-titles'>Technologies:</span></p>
                                    <p><span className='card-titles'>Duration:</span> </p>
                                    <div className='mt-4 py-2'>
                                        <a href='#' className='btn btn-primary me-3'>View Live Site</a>
                                        <a href='#' className="btn btn-outline-light">View Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className='container-fluid project-section'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='project-card'>
                                    <h2 className='text-white text-center mb-4'>Village</h2>
                                    <p><span className='card-titles'>About:</span></p>
                                    <p><span className='card-titles'>Organization:</span> Personal Project</p>
                                    <p><span className='card-titles'>Technologies:</span></p>
                                    <p><span className='card-titles'>Duration:</span> </p>
                                    <div className='mt-4 py-2'>
                                        <a href='#' className='btn btn-primary me-3'>View Live Site</a>
                                        <a href='#' className="btn btn-outline-light">View Source Code</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>

                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className='container-fluid project-section pb-5'>
                        <div className='row'>
                            <div className='col-6'>

                            </div>
                            <div className='col-6'>
                                <div className='project-card'>
                                    <h2 className='text-white text-center mb-4'>Smart Brain</h2>
                                    <p><span className='card-titles'>About:</span> Smart brain is a simple facial detection app that allows users to input an image url and using the Clarifai API, Smart Brain will detect a face and draw a box around it. This app is a full-stack project that stores a users credentials and keeps track of the number of entries each user has made ranking each user and comparing them to others in the database.</p>
                                    <p><span className='card-titles'>Organization:</span> Bootcamp Project</p>
                                    <p><span className='card-titles'>Technologies:</span>
                                        <ul>
                                            <li>React</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>Node.js</li>
                                            <li>Express.js</li>
                                            <li>PostgreSQL</li>
                                            <li>Knex.js</li>
                                            <li>Heroku</li>
                                        </ul>
                                    </p>
                                    <p><span className='card-titles'>Duration:</span> 1 mo</p>
                                    <div className='mt-4 py-2'>
                                        <a href='#' className='btn btn-primary me-3'>View Live Site</a>
                                        <a href='https://github.com/kane-toomer/smartbrain' className="btn btn-outline-light">View Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact id='contact' />
            </div >
        );
    }
}

export default Home;