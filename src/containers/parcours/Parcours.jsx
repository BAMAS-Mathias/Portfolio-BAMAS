import React from "react";
import ParcoursStep from "../../components/parcours-steps/ParcoursStep";
import "./parcours.css"

const Parcours = () => (
    <div className={"parcours__steps-container"}>
        <ParcoursStep
            title={"BUT Info IUT Aix-Marseille"}
            date={"2022 - Aujourd’hui"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                "nisi ut aliquip ex ea commodo consequat."}
        />
        <ParcoursStep
            title={"Lycée Emile Zola"}
            date={"2019 - 2022"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                "nisi ut aliquip ex ea commodo consequat."}
        />
        <ParcoursStep
            title={"Collège Chateau Double"}
            date={"2015 - 2019"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                "nisi ut aliquip ex ea commodo consequat."}
        />
    </div>
)

export default Parcours;