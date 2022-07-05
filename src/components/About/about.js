import React, { Component } from 'react';
import Navigation from '../Navigation/navigation.js';
import Contact from '../Contact/contact.js';
import '../../assets/css/main.css';


class About extends Component {
    render() {
        return (
            <div className="container">
                {/* Navigation Bar */}
                < Navigation />

                {/* About Information */}
                <p className='my-5 py-5 text-center intro-text'>A little about me...</p>

                <div className='container mt-5 py-5'>
                    <div className='row'>
                        {/* My Picture */}
                        <div className='col-xs-12 col-lg-6'>

                        </div>
                        {/* Synopsis */}
                        <div className='col-xs-12 col-lg-6'>
                            <div className=''>
                                <h3 className='text-white'>My name is Kane Toomer. I'm a software developer from the incredibly hot Las Vegas, NV.</h3>

                                {/* Paragraph 1 */}
                                <p></p>

                                {/* Paragraph 2 */}
                                <p></p>

                                <div className='project-card'>
                                    <div className='row'>
                                        <p>Technologies I have experience with...</p>
                                        <div className='col-xs-12 col-lg-4'>
                                            {/* Technical Proficiencies */}
                                            <p><span className='card-titles'>Frontend:</span>
                                                <ul>
                                                    <li>React.js</li>
                                                    <li>Redux</li>
                                                    <li>Javascript</li>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>Bootstrap</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='col-xs-12 col-lg-4'>
                                            {/* Technical Proficiencies */}
                                            <p><span className='card-titles'>Backend:</span>
                                                <ul>
                                                    <li>Node.js</li>
                                                    <li>Express.js</li>
                                                    <li>PostgreSQL</li>
                                                    <li>Knex.js</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className='col-xs-12 col-lg-4'>
                                            {/* Technical Proficiencies */}
                                            <p><span className='card-titles'>Other:</span>
                                                <ul>
                                                    <li>Git/Github</li>
                                                    <li>Heroku</li>
                                                    <li>Figma (used for wireframing and UI/X design for web and mobile applications)</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                <Contact id='contact' />

            </div>
        );
    }
}

export default About;