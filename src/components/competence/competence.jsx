import React from "react";
import "./competence.css";

const Competence = ({progress, competence, img}) => (
    <div className={"competence__container"}>
        <img src={img}/>
        <h3 className={"competence__language-title"}>{competence}</h3>
        <ProgressBar progress={progress} />
    </div>
)

const ProgressBar = ({progress}) => {
    switch (progress) {
        case 'DEBUTANT':
            return <div className={"competence__debutant competence__level"}><span></span><p>Débutant</p></div>
        case 'INTERMEDIAIRE':
            return <div className={"competence__intermediaire competence__level"}><span></span><p>Intermédiaire</p></div>
        case 'AVANCE':
            return <div className={"competence__avance competence__level"}><span></span><p>Avancé</p></div>
        default:
            return <div className={"competence__debutant"}><span></span><p>Débutant</p></div>
    }
}

export default Competence;