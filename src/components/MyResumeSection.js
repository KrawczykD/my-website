import React from 'react';
import './MyResumeSection.css';

const schools = [{
    key:"0",
    schoolGrade:"Szkola pierwsza",
    schoolName:"Szkola wyzsza 2019 - 2019",
    directionName:"Kierunek",
    description:"Opis szkoly , kierunku na maxymalnie 2 linijki",
    side:"rightTimeLine",
},{
    key:"1",
    schoolGrade:"Szkola druga",
    schoolName:"Szkola srednia 2019 - 2901",
    directionName:"Kierunek",
    description:"Opis szkoly , kierunku na maxymalnie 2 linijki",
    side:"leftTimeLine",
},{
    key:"2",
    schoolGrade:"Szkola trzecia",
    schoolName:"Szkola srednia 2901 - 2901",
    directionName:"Kierunek",
    description:"Opis szkoly , kierunku na maxymalnie 2 linijki",
    side:"rightTimeLine",
},{   
    key:"3",
    schoolGrade:"Szkola czwarta",
    schoolName:"Szkola podstawowa 2190 - 2109",
    directionName:"Kierunek",
    description:"Opis szkoly , kierunku na maxymalnie 2 linijki",
    side:"leftTimeLine",
}]

const MyResumeSection=()=>{

    const schoolsList = schools.map((school) => (
        <div className="timeLine" key={school.key}>
                <div className={school.side}>
                    <div className="school">
                        <p className="schoolName">{school.schoolGrade}</p>
                        <div className="schoolDetail">
                            <p>{school.schoolName}</p>
                            <p>{school.shoolDirection}</p>
                            <p>{school.description}</p>
                        </div>
                    </div>
                </div>
        </div>
        
    ))

    return(
        <div className="MyResumeSection forAll">
            {/* <h1>MY RESUME</h1> */}
            <div className="education"><p>EDUCATION</p></div>
            {schoolsList}
            </div>
    )
}

export default MyResumeSection;