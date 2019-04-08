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
                    <div className="text"><p>If you want contact witch me , please click and sent me email damiankrawczyk23@gmail.com</p></div>
                </div>
                <div className="contact">
                    <a href="tel:0777777777">
                        <i className="fas fa-mobile-alt"></i>
                    </a>
                    <div className="text"><p>0 777 777 777</p></div>
                </div>
                <div className="contact">
                    <a href="https://goo.gl/maps/PQxwSWnyY6x">
                        <i class="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="text"><p>Manchster , United Kingdom</p></div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;