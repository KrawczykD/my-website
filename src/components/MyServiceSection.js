import React from 'react';
import './MyServiceSection.css';

const services = [{
        id:0,
        title:"Responsive Website" , 
        description:"Responsive website is very important to provide the best reception for users on all devices. If you want a nice looking page on all devices I can develop a responsive website for you by using most common and fresh technologies." , 
        imgAlt:"website for all devices like laptop and telephone" , 
        source: require('../images/responsive.jpg')},
        {
        id:1,
        title:"Web Aplication in React" , 
        description:"React is a very common framework today. Thanks using this library, you can easily expand your code and keep it clean. This website was created in this technology because it is my favorite. I can also prepare stunning web site or web application for you with using React." , 
        imgAlt:"react logo" , 
        source: require('../images/react.png')},
        {
        id:2,
        title:"Business Website" , 
        description:"Do you own a business? In this modern world you need your own website to keep in touch with clients. You have to keep your content always up to date. That is why you need best website! I can build it for you." , 
        imgAlt:" peoples table on meeting" , 
        source: require('../images/business1.jpg')},
        {
        id:3,
        title:"Designe and Idea" , 
        description:"You have no idea how should your website look like? Design is creative part and is a very important part of the whole development process. I can design for you whole layout and help you decide what solution to choose." , 
        imgAlt:"sketch with devices" , 
        source: require('../images/designe.jpg')},
        {
        id:4,
        title:"Landing Page & SPA" , 
        description:"You need Landing page?  Or you want to stunning SPA? Contact me know If you want to know more about new trends, and techniques how to create the best modern websites or web explications." , 
        imgAlt:"cartoon people sitting on paper plane" , 
        source: require('../images/landing.jpg')},
        
    
]

const MyServiceSection=()=>{

    const servicesList = services.map(item=> (
            <div className="serviceSection" key={item.id}>
                <div className="serviceIco"><img alt={item.imgAlt} src={item.source}/></div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
    ))
    return(
        <div id="3" className="MyServiceSection forAll">
            <h1>MY SERVICES</h1>
            {servicesList}
        </div>
    )
}

export default MyServiceSection;