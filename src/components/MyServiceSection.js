import React from 'react';
import './MyServiceSection.css';

const services = [{
        id:0,
        title:"Responsive Website" , 
        description:"Do you want nice looking page on all devices? I can build responsive website for you with using most common and fresh technologies." , 
        imgAlt:"website for all devices like laptop and telephone" , 
        source: require('../images/responsive.jpg')},
        {
        id:1,
        title:"Web Aplication in React" , 
        description:"React is very common framework today. This website was created in this technology because I very like it. I can also prepare stunning web application for you with using React." , 
        imgAlt:"react logo" , 
        source: require('../images/react.png')},
        {
        id:2,
        title:"Business Website" , 
        description:"Do you own a business? Then you need best website! I can build it for you." , 
        imgAlt:" peoples table on meeting" , 
        source: require('../images/business1.jpg')},
        {
        id:3,
        title:"Designe and Idea" , 
        description:"You have no idea how your website should looks like? I can also designed for you whole layout and help you decide what solution choose." , 
        imgAlt:"sketch with devices" , 
        source: require('../images/designe.jpg')},
        {
        id:4,
        title:"Landing Page & SPA" , 
        description:"If you need Landing page or you want to SPA let me know. If you want to know more about newest trends , contact with me." , 
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