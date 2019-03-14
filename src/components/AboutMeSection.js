import React from 'react';
import './AboutMeSection.css';

const AboutMeSection=()=>{
    return(
        <div id="2" className="AboutMeSection forAll">
            <h1>ABOUT ME</h1>
            <p className="infoAboutMe">My name is Damian Krawczyk and I am junior web developer from Manchester</p>
            <p>I create this web page as a my portfolio to expose myself. Please check this whole website to get more information about me , my work and knowledge.</p>
            <div className="interestings">
                <p>HOBBIES & INTERESTS</p>
                <i class="fas fa-laptop-code">
                    <p>Coding</p>
                </i>
                <i class="fas fa-headphones-alt">
                    <p>Music</p>
                </i>
                <i class="fas fa-car">
                    <p>Cars</p>
                </i>
                <i class="fas fa-snowboarding">
                    <p>Mountainboarding</p>
                </i>

                <i class="fas fa-wrench">
                    <p>Mechanics</p>
                </i>
                <i class="far fa-lightbulb">
                    <p>New Technologies</p>
                </i>
                <i class="fas fa-utensils">
                    <p>Cooking</p>
                </i>
            </div>
        </div>
    )
}

export default AboutMeSection;