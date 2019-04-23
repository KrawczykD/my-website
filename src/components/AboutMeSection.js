import React from 'react';
import './AboutMeSection.css';

const AboutMeSection=()=>{
    return(
        <div id="2" className="AboutMeSection forAll">
            <h1>ABOUT ME</h1>
            <p className="infoAboutMe">My name is Damian Krawczyk and I'am junior web developer from Manchester. I'm friendly, and active person who hate boring. I always have to learn something new and discover new things. I love solving problems. I finished IT school and I have a lot of coding courses and challenges behind me. I like new technologies and gadgets.</p>
            <p>
            This is my React website, design and build from scratch by me. I develop this website to show my skills, knowledge and expose myself. I would like to show my future employer, my way of thinking and my code. On my website on section portfolio you can find my few other projects. This website was built by using React technology and design as a responsive website with using common trends and techniques. Please feel free to explore my website.
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
                <i className="fas fa-utensils">
                    <p>Cooking</p>
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
            </div>
        </div>
    )
}

export default AboutMeSection;