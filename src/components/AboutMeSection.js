import React from 'react';
import './AboutMeSection.css';

const AboutMeSection=()=>{
    return(
        <div id="2" className="AboutMeSection forAll">
            <h1>ABOUT ME</h1>
            <p className="infoAboutMe">My name is Damian Krawczyk and I'am junior web developer from Manchester.</p>
            <p>I create this web page as a my portfolio to show up my skills, knowledge and expose myself. 
                <br></br><br></br>
                Please check this whole website to get more information about me , my work and knowledge. If you woluld like to contact with me feel free.
            </p>
            <div className="interestings">
                <p>HOBBIES & INTERESTS</p>
                <i className="fas fa-laptop-code">
                    <p>Coding</p>
                </i>
                <i className="fas fa-headphones-alt">
                    <p>Music</p>
                </i>
                <i className="fas fa-car">
                    <p>Cars</p>
                </i>
                <i className="fas fa-snowboarding">
                    <p>Mountainboarding</p>
                </i>

                <i className="fas fa-wrench">
                    <p>Mechanics</p>
                </i>
                <i className="far fa-lightbulb">
                    <p>New Technologies</p>
                </i>
                <i className="fas fa-utensils">
                    <p>Cooking</p>
                </i>
            </div>
        </div>
    )
}

export default AboutMeSection;