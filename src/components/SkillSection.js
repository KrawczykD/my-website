import React from 'react';
import './SkillSection.css';

import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
    {
        id:"0",
        procentage:77,
        skill:"HTML",
    },{
        id:"1",
        procentage:55,
        skill:"CSS",
    },{
        id:"2",
        procentage:33,
        skill:"JS",
    },{
        id:"3",
        procentage:78,
        skill:"REACT",
    },{
        id:"4",
        procentage:70,
        skill:"BOOTSTRAP",
    },
    {
        id:"5",
        procentage:70,
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
            <h1 className="forAll h1">SKILLS</h1>
            {skillsList}
        </div>
    )
}

export default SkillSection;