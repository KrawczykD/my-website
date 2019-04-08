import React from 'react';
import './MyServiceSection.css';

const services = [{
        id:0,
        title:"Responsive Website" , 
        description:"I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox" , 
        imgAlt:"website for all devices like laptop and telephone" , 
        source: require('../images/responsive.jpg')},
        {
        id:1,
        title:"Web Aplication in React" , 
        description:"I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox" , 
        imgAlt:"react logo" , 
        source: require('../images/react.png')},
        {
        id:2,
        title:"Business Website" , 
        description:"I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox" , 
        imgAlt:" peoples around business table" , 
        source: require('../images/business1.jpg')},
        {
        id:3,
        title:"Designe and Idea" , 
        description:"I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox" , 
        imgAlt:"sketch with devices" , 
        source: require('../images/designe.jpg')},
        {
        id:4,
        title:"Landing Page & SPA" , 
        description:"I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox" , 
        imgAlt:"cartoon rocket" , 
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