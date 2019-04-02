import React from 'react';
import './PortfolioSection.css';

const PortfolioSection=()=>{
    return(
        <div id="5" className="PortfolioSection forAll">
            <h1 className="forAll h1">PORTFOLIO</h1>
            <div className="gallery">
                    <div className="item">
                        <img alt="" src={require('../images/0_project.png')}></img>
                        {/* <a href="http://damiankrawczyk.co.uk" className="itemCoverOpacity">
                            <div className="itemCoverContent">
                                <h2>Weather App in React</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cumque soluta harum iste porro voluptate repellat provident amet odio ipsam, animi blanditiis, 
                                    esse aut asperiores itaque placeat mollitia omnis minima consequuntur.

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatem.
                                </p>
                            </div>
                        </a> */}
                    </div>
                    <div className="item">
                        <img alt="" src={require('../images/1_project.png')}></img>
                    </div>
                    <div className="item">
                        <img alt="" src={require('../images/2_project.png')}></img>
                    </div>
            </div>
        </div>
    )
}

export default PortfolioSection;