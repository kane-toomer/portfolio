import React, { Component } from 'react';
import '../Home/home.css';
import linkedInLogo from '../../assets/images/LinkedIN.svg';

class Contact extends Component {

    render() {
        return (
            <div id="contact" className="py-5 contact-section" >
                <div className="container">
                    <h1 className="text-center intro-text">I'm open to new possibilities!</h1>
                    <p className="mt-3 text-center">Feel free to contact me by clicking on the button below and connecting with me via LinkedIn!</p>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/kanetoomer/" className="btn btn-primary btn-lg mt-3 linkedIn">
                            <img src={linkedInLogo} alt={'linked in logo'} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }


}

export default Contact;