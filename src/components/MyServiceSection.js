import React from 'react';
import './MyServiceSection.css'

const MyServiceSection=()=>{
    return(
        <div id="3" className="MyServiceSection forAll">
            <h1>MY SERVICES</h1>
            <div className="serviceSection">
                <div className="serviceIco"><img alt="website for all devices like laptop and telephone" src={require('../images/responsive.jpg')}/></div>
                <h2>Technologia</h2>
                <p>I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox</p>
            </div>
            <div className="serviceSection">
                <div className="serviceIco"><img alt="website for all devices like laptop and telephone" src={require('../images/responsive.jpg')}/></div>
                <h2>Technologia</h2>
                <p>I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox</p>
            </div>
            <div className="serviceSection">
                <div className="serviceIco"><img alt="website for all devices like laptop and telephone" src={require('../images/responsive.jpg')}/></div>
                <h2>Technologia</h2>
                <p>I can build for you responsive web designe with using css grid , mediaQueries , bootstrap and flexbox</p>
            </div>
        </div>
    )
}

export default MyServiceSection;