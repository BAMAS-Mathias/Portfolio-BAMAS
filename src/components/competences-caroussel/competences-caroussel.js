import React from 'react';
import Competence from "../competence/competence";
import "./competences-caroussel.css";
import reactIcon from "../../assets/logo/React-icon.png"
import cssIcon from "../../assets/logo/Css-icon.png";
import htmlIcon from "../../assets/logo/Html-icon.png";
import javaIcon from "../../assets/logo/Java-icon.png";
import javascriptIcon from "../../assets/logo/Javascript-icon.png";
import mysqlIcon from "../../assets/logo/MySQL-icon.svg";
import pythonIcon from "../../assets/logo/Python-icon.png";
import phpIcon from "../../assets/logo/php-icon.png";
import gitIcon from "../../assets/logo/git-icon.png";

const CompetencesCaroussel = () => (
    <div className={"competences-caroussel"}>
        <Competence
            competence={"HTML"}
            progress={"AVANCE"}
            img={htmlIcon}/>
        <Competence
            competence={"CSS"}
            progress={"AVANCE"}
            img={cssIcon}/>
        <Competence
            competence={"JAVASCRIPT"}
            progress={"AVANCE"}
            img={javascriptIcon}/>
        <Competence
            competence={"REACT"}
            progress={"DEBUTANT"}
            img={reactIcon}/>
        <Competence
            competence={"JAVA"}
            progress={"INTERMEDIAIRE"}
            img={javaIcon}/>
        <Competence
                competence={"PYTHON"}
                progress={"INTERMEDIAIRE"}
                img={pythonIcon}/>
        <Competence
                competence={"SQL"}
                progress={"AVANCE"}
                img={mysqlIcon}/>
        <Competence
                competence={"PHP"}
                progress={"INTERMEDIAIRE"}
                img={phpIcon}/>
        <Competence
                competence={"GIT"}
                progress={"INTERMEDIAIRE"}
                img={gitIcon}/>



        <Competence
                competence={"HTML"}
                progress={"AVANCE"}
                img={htmlIcon}/>
        <Competence
                competence={"CSS"}
                progress={"AVANCE"}
                img={cssIcon}/>
        <Competence
                competence={"JAVASCRIPT"}
                progress={"INTERMEDIAIRE"}
                img={javascriptIcon}/>
        <Competence
                competence={"REACT"}
                progress={"DEBUTANT"}
                img={reactIcon}/>
        <Competence
                competence={"JAVA"}
                progress={"INTERMEDIAIRE"}
                img={javaIcon}/>
        <Competence
                competence={"PYTHON"}
                progress={"INTERMEDIAIRE"}
                img={pythonIcon}/>
        <Competence
                competence={"SQL"}
                progress={"AVANCE"}
                img={mysqlIcon}/>
        <Competence
                competence={"PHP"}
                progress={"INTERMEDIAIRE"}
                img={phpIcon}/>
        <Competence
                competence={"GIT"}
                progress={"INTERMEDIAIRE"}
                img={gitIcon}/>
    </div>
)

export default CompetencesCaroussel;