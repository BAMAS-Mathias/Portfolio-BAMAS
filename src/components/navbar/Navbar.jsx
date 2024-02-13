import React from 'react';
import "./navbar.css";

const Navbar = () => (
        <div className={"navbar__link-list"}>
            <div className={"navbar-element-container"}>
                <span></span>
                <h3 className={"navbar__title"}>Parcours</h3>
            </div>
            <div className={"navbar-element-container"}>
                <span></span>
                <h3 className={"navbar__title"}>Compétences</h3>
            </div>
            <div className={"navbar-element-container"}>
                <span></span>
                <h3 className={"navbar__title"}>Projets</h3>
            </div>
        </div>
    );

export default Navbar;