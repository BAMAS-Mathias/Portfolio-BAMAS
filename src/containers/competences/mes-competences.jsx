import React from 'react';
import CompetencesCaroussel from "../../components/competences-caroussel/competences-caroussel";
import "./mes-competences.css";


const MesCompetences = () => (
    <div id={"mes-competences__container"}>
        <h2 className={"mes-competences__title"}>Mes compétences</h2>
        <p className={"mes-competences__sub-title"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
        <CompetencesCaroussel />
    </div>
)

export default MesCompetences;