import React from "react";
import ParcoursStep from "../../components/parcours-steps/ParcoursStep";
import "./parcours.css"

const Parcours = () => (
    <div id={"parcours"} className={"parcours__steps-container"}>
        <header>
            <h2 className={"parcours__title"}>Mon Parcours</h2>
            <p className={"parcours__subtitle"}>Voici mon parcours réalisé ainsi que les diplomes que j'ai obtenus</p>
        </header>
        <ParcoursStep
            title={"BUT Info IUT Aix-Marseille"}
            date={"2022 - Aujourd’hui"}
            text={"Actuellement en deuxième année de BUT Informatique à l'IUT d'Aix Marseille dans le parcours réalisation et conception d'applications. J'y ai eu l'occasion de découvrir de nombreux languages, de réalisé multiples projets mais aussi d'apprendre a collaborer en équipe dans un but commun"}
        />
        <ParcoursStep
            title={"Lycée Emile Zola"}
            date={"2019 - 2022"}
            text={"Je suis titulaire d'un BAC Général mention Trés Bien avec les spécialités Mathématique, Numérique et Sciences Informatique et Physique ainsi que l'option Mathématiques expertes." }
        />
        <ParcoursStep
            title={"Collège Chateau Double"}
            date={"2015 - 2019"}
            text={"Je suis titulaire du Brevet avec la mention Trés Bien."}
        />
    </div>
)

export default Parcours;