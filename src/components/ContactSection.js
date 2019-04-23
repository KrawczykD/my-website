import React from 'react';
import './ContactSection.css'

const ContactSection=()=>{
    return(
        <div id="6" className="ContactSection forAll">
            <h1 className="forAll h1">CONTACT</h1>
            <div className="contacts">
                <div className="contact">
                    <a href="mailto:damiankrawczyk23@gmail.com">
                        <i className="far fa-envelope"></i>
                    </a>
                    <div className="text"><p>If you want contact witch me , please Tap and sent me email</p></div>
                </div>
                <div className="contact">
                    <a href="tel:07538865743">
                        <i className="fas fa-mobile-alt"></i>
                    </a>
                    <div className="text"><p>Tap to contact me on my phone</p></div>
                </div>
                <div className="contact">
                    <a href="https://goo.gl/maps/PQxwSWnyY6x">
                        <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="text"><p>Manchester , United Kingdom</p></div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;