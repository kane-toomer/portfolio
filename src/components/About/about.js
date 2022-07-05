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
                                <h3 className='text-white mb-4'>My name is Kane Toomer. I'm a software developer from the incredibly hot Las Vegas, NV.</h3>

                                {/* Paragraph 1 */}
                                <p className="mb-4">My path to tech is not traditional by any means. I thought my life would be simple, get my degree, join the military, do my 20, retire and die (aka follow the family mold). I realised a little too late that this wasn't going to be for me.</p>

                                {/* Paragraph 2 */}
                                <p className='mb-4'> Instead I work in higher education and I am ready for a change. As much as I love working at the collegiate level, working in tech as a software developer is where I truly want to be.</p>

                                {/* Paragraph 3 */}
                                <p className='mb-4'>I started coding in high school by making small iOS apps. This carried on into my undergrad where I would spend most of my time designing small apps in Sketch during lectures and coding them in the library right after. This grew into building a (failed) startup w/ a friend where I designed and developed the front-end for both the mobile and web applications of our property management software.</p>

                                {/* Paragraph 4 */}
                                <p className='mb-4'>I think it's safe to say I think I should have seen this coming. However, when you are young, sometimes...
                                </p>
                                <p className='text-center'>“Stupid is as stupid does.”</p>
                                <p className='text-center mb-5'>- Forrest Gump</p>

                                <div className='project-card'>
                                    <div className='row'>
                                        <p>Technologies I have experience with...</p>
                                        <div className='col-xs-12 col-lg-4'>
                                            {/* Technical Proficiencies */}
                                            <p><span className='card-titles'>Frontend:</span>
                                                <ul>
                                                    <li>React.js</li>
                                                    <li>React Native</li>
                                                    <li>Redux</li>
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
                                                    <li>Figma</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-5 mb-3">
                                    <button className='btn btn-primary btn-lg'>Download My Resume</button>
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