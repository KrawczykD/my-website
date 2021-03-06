import React from 'react';
import './SkillSection.css';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
    {
        id:"0",
        procentage:58,
        skill:"HTML",
    },{
        id:"1",
        procentage:54,
        skill:"CSS",
    },{
        id:"2",
        procentage:66,
        skill:"JS",
    },{
        id:"3",
        procentage:60,
        skill:"REACT",
    },{
        id:"4",
        procentage:34,
        skill:"BOOTSTRAP",
    },
    {
        id:"5",
        procentage:34,
        skill:"Git",
    },
]




const SkillSection=(props)=>{

    const skillsList = skills.map(skill=> (
        <div className="circle" key={skill.id}>
                <CircularProgressbar initialAnimation={true} counterClockwise={true} percentage={props.circleAnimation ? skill.procentage : 0} text={`${skill.procentage}%`} />
                {/* <p className="procentage">50</p> */}
                <p>{skill.skill}</p>
            </div>
    ))

    return(
        <div id="4" className="SkillSection forAll">
            <div className="skills">
                <h1 className="forAll h1">SKILLS</h1>
                {skillsList}
            </div>
        </div>
    )
}

export default SkillSection;