import React from 'react';
import './PortfolioSection.css';

const PortfolioSection=()=>{

    const portfolioItems = [
        {
            id:0,
            link:require('../images/0_project.png'),
            imgAlt:"my project react weatehr app",
            title:"Weather App in React",
            ghLink:"https://krawczykd.github.io/WeatherApp/",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque soluta harum iste porro voluptate repellat provident amet odio ipsam animi blanditiis esse aut asperiores itaque placeat mollitia omnis minima consequuntur.Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        },
        {
            id:1,
            link:require('../images/1_project.png'),
            imgAlt:"my project Color Guessing Game",
            title:"Color Guessing Game",
            ghLink:"https://krawczykd.github.io/ColorGame/",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque soluta harum iste porro voluptate repellat provident amet odio ipsam animi blanditiis esse aut asperiores itaque placeat mollitia omnis minima consequuntur.Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        },
        {
            id:2,
            link:require('../images/2_project.png'),
            imgAlt:"my project game rock scissors paper",
            title:"Game Rock Scissors Paper",
            ghLink:"https://krawczykd.github.io/Game-Rock-Scissors-Paper/",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque soluta harum iste porro voluptate repellat provident amet odio ipsam animi blanditiis esse aut asperiores itaque placeat mollitia omnis minima consequuntur.Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        },
        {
            id:3,
            link:require('../images/3_project.png'),
            imgAlt:"my project to do app in react",
            title:"React To Do List",
            ghLink:"https://krawczykd.github.io/To-do-list-react/",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Cumque soluta harum iste porro voluptate repellat provident amet odio ipsam animi blanditiis esse aut asperiores itaque placeat mollitia omnis minima consequuntur.Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        }
    ]

    const list = portfolioItems.map( item =>(
        <div className="item" key={item.id}>
                        <div className="touchButton">
                            <i className="far fa-hand-pointer"></i>
                        </div>
                            <img alt={item.imgAlt} src={item.link}></img>
                            <a href={item.ghLink} target="_blank" rel="noopener noreferrer" className="itemCoverOpacity">
                                <div className="itemCoverContent">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </a>
                    </div>
    ))

    return(
        <div id="5" className="PortfolioSection forAll">
            <h1 className="forAll h1">PORTFOLIO</h1>
            <div className="gallery">
                {list}
            </div>
        </div>
    )
}

export default PortfolioSection;