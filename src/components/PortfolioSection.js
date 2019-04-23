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
            description:"This application was built in React with using free weather API. Thanks to that you can check current temp , wind speed and many others details about weather in any place in the world. I used also JS , CSS and HTML to build this app. This project learn me how to use API and how to manage data. I used React features like state and stateless components and life-cycle methods. Click on it to go to working demo on github."
        },
        {
            id:1,
            link:require('../images/1_project.png'),
            imgAlt:"my project Color Guessing Game",
            title:"Color Guessing Game",
            ghLink:"https://krawczykd.github.io/ColorGame/",
            description:"Read the RGB code to guess appropriate answer. This game was built with pure JavaScript, CSS3 and HTML. This game was one of my many others project during my learning path. I have learned new ES6 and developed my JS code skills. Click on it to go to working demo on github."
        },
        {
            id:2,
            link:require('../images/2_project.png'),
            imgAlt:"my project game rock scissors paper",
            title:"Game Rock Scissors Paper",
            ghLink:"https://krawczykd.github.io/Game-Rock-Scissors-Paper/",
            description:"Rock scissors and paper. This game was built within pure JavaScript, CSS3 and HTML. This game was one of my many others project during my learning path. I have learnt new ES6 and developed my JS code skills. Click on it to go to working demo on github."
        },
        {
            id:3,
            link:require('../images/3_project.png'),
            imgAlt:"my project to do app in react",
            title:"React To Do List",
            ghLink:"https://krawczykd.github.io/To-do-list-react/",
            description:"I built to do list application in React. Thanks to that you can add, delete tasks to your list. But this application is better than others because use React components. You can also thick important notice, till date and finish date. You can also check the task history. I use React JS, CSS and HTML build this. This project learn me how to manage data by using react and is. I use React features like state and stateless components and new ES6 features like arrow function or new if statement. Click on it to go to working demo on github."
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