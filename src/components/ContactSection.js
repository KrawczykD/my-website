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
                    <div className="text"><p>damiankrawczyk23@gmail.com</p></div>
                </div>
                <div className="contact">
                    <a href="phoneto:0 777 777 777">
                        <i className="fas fa-mobile-alt"></i>
                    </a>
                    <div className="text"><p>0 777 777 777</p></div>
                </div>
                <div className="contact">
                    <a href="https://facebook.com/damian.krawczyk.71868">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <div className="text"><p>Damian krawczyk</p></div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;