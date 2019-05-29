import React from 'react';
import './MyResumeSection.css';

const schools = [{
    id:"0",
    schoolGrade:"Udemy student",
    schoolName:"Udemy",
    year: "2016 - Current",
    directionName:"Web Developer , React , JavaScript",
    description:"Web Developer , React , JavaScript",
    side:"rightTimeLine",
},{
    id:"1",
    schoolGrade:"Functional Skills qualfication",
    schoolName:"Business advice direct limited",
    year: "2018",
    directionName:"Mathematics at Level 2",
    description:"Mathematics at Level 2",
    side:"leftTimeLine",
},{
    id:"2",
    schoolGrade:"BTEC national certificate RQF Level 3",
    schoolName:"Vocational secondary school",
    year: "2006 - 2009",
    directionName:"Certificate of completion from a vocational secondary IT school",
    description:"Certificate of completion from a vocational secondary IT school",
    side:"rightTimeLine",
},{   
    id:"3",
    schoolGrade:"GCE advance A level",
    schoolName:"Vocational secondary school",
    year: "2006 - 2009",
    directionName:"Certificate of maturity",
    description:"Certificate of maturity",
    side:"leftTimeLine",
}]

const MyResumeSection=()=>{

    const schoolsList = schools.map((school) => (
        <div className="timeLine" key={school.id}>
                <div className={school.side}>
                    <div className="school">
                        <p className="schoolName">{school.schoolName}</p>
                        <div className="schoolDetail">
                            <p>{school.schoolGrade}</p>
                            <p>{school.year}</p>
                            <p>{school.description}</p>
                        </div>
                    </div>
                </div>
        </div>
        
    ))

    return(
        <div className="MyResumeSection forAll">
            <div className="line"></div>
            {/* <h1>MY RESUME</h1> */}
            <div className="education"><p>EDUCATION</p></div>
            {schoolsList}
        </div>
    )
}

export default MyResumeSection;