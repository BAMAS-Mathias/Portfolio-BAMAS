import React from "react";
import "./parcours-steps.css"
const ParcoursStep = ({date, title, text}) => (
    <div className={"parcours__step__grid"}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{text}</p>
    </div>
)

export default ParcoursStep;