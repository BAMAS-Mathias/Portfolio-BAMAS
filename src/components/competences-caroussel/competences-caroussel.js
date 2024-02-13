import React from 'react';
import Competence from "../competence/competence";
import "./competences-caroussel.css";
import reactIcon from "../../assets/logo/React-icon.png"

const CompetencesCaroussel = () => (
    <div className={"competences-caroussel"}>
        <Competence
            competence={"1"}
            progress={"DEBUTANT"}
            img={reactIcon}/>
        <Competence
            competence={"2"}
            progress={"INTERMEDIAIRE"}
            img={reactIcon}/>
        <Competence
            competence={"3"}
            progress={"AVANCE"}
            img={reactIcon}/>
        <Competence
            competence={"4"}
            progress={"INTERMEDIAIRE"}
            img={reactIcon}/>
        <Competence
            competence={"5"}
            progress={"AVANCE"}
            img={reactIcon}/>
        <Competence
            competence={"3"}
            progress={"DEBUTANT"}
            img={reactIcon}/>
        <Competence
                competence={"1"}
                progress={"DEBUTANT"}
                img={reactIcon}/>
        <Competence
                competence={"2"}
                progress={"INTERMEDIAIRE"}
                img={reactIcon}/>
        <Competence
                competence={"3"}
                progress={"AVANCE"}
                img={reactIcon}/>
        <Competence
                competence={"4"}
                progress={"INTERMEDIAIRE"}
                img={reactIcon}/>
        <Competence
                competence={"5"}
                progress={"AVANCE"}
                img={reactIcon}/>
        <Competence
                competence={"3"}
                progress={"DEBUTANT"}
                img={reactIcon}/>
    </div>
)

export default CompetencesCaroussel;