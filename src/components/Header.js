import React from "react";
import './Header.css';

const Header =(props)=>{
    return(
        <div id="1" className="Header">
            <header>
                <div className="bgcOpacity" style={{opacity:props.opacity}}></div>
                <div className="title">
                    <h1>{"DAMIAN KRAWCZYK"}</h1>
                    <h3>{"JUNIOR WEB DEVELOPER"}</h3>
                </div>
            </header>
        </div>
    )
}

export default Header;



