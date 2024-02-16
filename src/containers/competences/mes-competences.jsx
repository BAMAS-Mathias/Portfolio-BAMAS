import React from 'react';
import CompetencesCaroussel from "../../components/competences-caroussel/competences-caroussel";
import "./mes-competences.css";


const MesCompetences = () => (
    <div id={"mes-competences__container"}>
        <h2 className={"mes-competences__title"}>Mes compétences</h2>
        <p className={"mes-competences__sub-title"}>Voici la liste de mes compétences apprise lors de mes études mais aussi pendant mon temps personnel</p>
        <CompetencesCaroussel />
    </div>
)

export default MesCompetences;