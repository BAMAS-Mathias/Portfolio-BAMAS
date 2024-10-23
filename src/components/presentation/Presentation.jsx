import React from "react";
import './presentation.css';

const Presentation = () => (
    <div className={"presentation__content"}>
        <h1 className={"presentation__heading"}>Mathias BAMAS</h1>
        <h2 className={"presentation__sub-heading"}>BUT Info - Troisième année</h2>
        <p className={"presentation__text"}>Actuellement en BUT informatique, je suis passionné par l'informatique, le web et les nouvelles technologies et recherche activement un stage rémunéré d'une durée de 16 semaines minimum à compter de fevrier 2025
        </p>
        <Link />
    </div>
);

const Link = () => (
    <div className={"presentation__link-list"}>
        <a href={"https://github.com/BAMAS-Mathias"}><img className={"presentation__links__icons"} alt="github-icon" src={require('../../assets/img/github-icon.png')} /></a>
        <a href={"https://www.linkedin.com/in/mathias-bamas-29113b291/"}><img className={"presentation__links__icons"} alt="linkedin-icon" src={require('../../assets/img/linkedin-icon.png')} /></a>
        <a href={"mailto:bamasmathias.contact@gmail.com"}><img className={"presentation__links__icons"} alt="phone-icon" src={require('../../assets/img/mail-icon.png')} /></a>
    </div>
)

export default Presentation;