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