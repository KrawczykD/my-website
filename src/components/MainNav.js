import React from 'react';
import "./MainNav.css";
var scrollToElement = require('scroll-to-element');

const MainNav =(props)=>{
    const scroll=(e)=>{

        e.preventDefault();
        var element = e.target.getAttribute('href') ;
        var elem = document.getElementById(element);
        var offset = element === "1" ? -window.innerHeight : -elem.offsetHeight/2

        scrollToElement(elem, {
        offset: offset ,
        ease: 'in-quad',
        duration: 1000
        });
    }
    

   
    return(
        <div className="mainNav" style={window.scrollY > window.innerHeight ? {position:"sticky" , top:0} : {}} >
            <nav>
                <button onClick={props.handleColapseNav}>
                    <i className={props.navActive ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
                <ul style={props.navActive ? {height:"350px"} : {heigh:"0px"}}>
                    <li onClick={props.navActive ? props.handleColapseNav : null }><a onClick={(e)=>(scroll(e))} href="1">HOME</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="2">About Me</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="3">My Service</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="4">Skills</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="5">Portfolio</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="6">Contact</a></li>
                    <li onClick={props.handleColapseNav}><a onClick={(e)=>(scroll(e))} href="7">Footer</a></li>
                </ul>
            </nav>
        </div>
    )   
}

export default MainNav;
// className="fas fa-bars"
// className="fas fa-times"