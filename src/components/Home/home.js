import React, { Component } from 'react';
import '../../assets/css/main.css';
import Contact from '../Contact/contact.js';
import Navigation from '../Navigation/navigation.js';


class Home extends Component {
    render() {
        return (
            <div className="container">
                {/* Main Section - what user sees when they first visit website. */}
                <section className='main'>
                    {/* Navigation Bar */}
                    <Navigation />

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
                            <div className='col-xs-12 col-lg-6'>

                            </div>
                            <div className='col-xs-12 col-lg-6'>
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
                            <div className='col-xs-12 col-lg-6'>

                            </div>
                            <div className='col-xs-12 col-lg-6'>
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
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className='container-fluid project-section pb-5'>
                        <div className='row'>
                            <div className='col-xs-12 col-lg-6'>

                            </div>
                            <div className='col-xs-12 col-lg-6'>
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
                                    <p><span className='card-titles'>Duration:</span> 2 wks</p>
                                    <div className='mt-4 py-2'>
                                        <a href='#' className='btn btn-primary me-3'>View Live Site</a>
                                        <a href='https://github.com/kane-toomer/smartbrain' className="btn btn-outline-light">View Source Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact id='contact' />
            </div >
        );
    }
}

export default Home;