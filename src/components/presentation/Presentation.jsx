import React from "react";
import './presentation.css';

const Presentation = () => (
    <div className={"presentation__content"}>
        <h1 className={"presentation__heading"}>Mathias BAMAS</h1>
        <h2 className={"presentation__sub-heading"}>BUT Info - Deuxième Année</h2>
        <p className={"presentation__text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link />
    </div>
);

const Link = () => (
    <div className={"presentation__link-list"}>
        <a href={"https://google.com"}><img className={"presentation__links__icons"} alt="github-icon" src={require('../../assets/img/github-icon.png')} /></a>
        <a href={"https://google.com"}><img className={"presentation__links__icons"} alt="linkedin-icon" src={require('../../assets/img/linkedin-icon.png')} /></a>
        <a href={"https://google.com"}><img className={"presentation__links__icons"} alt="phone-icon" src={require('../../assets/img/phone-icon.png')} /></a>
    </div>
)

export default Presentation;