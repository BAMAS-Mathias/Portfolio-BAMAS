import React, {Component} from 'react';
import Projet from "../../components/projet/projet";
import "./projets.css"
import gitIcon from "../../assets/logo/github-icon.png"
import discoverIcon from "../../assets/logo/link-icon.png"
import wcRewindBg from "../../assets/img/wcrewind-thumbnail.png"
import chirpchatBg from "../../assets/img/chirpchat-thumbnail.png"
import seismisViewerBg from "../../assets/img/seismicviewer-thumbnail.png"
import secretariatBg from "../../assets/img/secretariat-thumbnail.png"

const Projets = () => (
    <div id={"projets-container"}>
        <header>
            <h2 className={"projet-title"}>Mes Projets</h2>
            <p className={"projet-sub-title"}>Voici une liste de mes projets réalisés seul ou en équipe avec le code disponible</p>
        </header>
        <Projet
            title={"Application du secrétariat"}
            description={"Plugin Wordpress permettant aux secrétaires de l'IUT d'Aix-Marseille de visualiser les données des emplois du temps. Ce plugin récupère des données d'emploi du temps disponibles sur l'ENT pour les afficher dans une vue plus simple d'utilisation avec de nouvelles fonctionalités"}
            img={secretariatBg}
            languageList={["WORDPRESS","PHP","HTML","CSS","SQL","JAVASCRIPT"]}
            linksMap={{'GitHub': [gitIcon,"https://github.com/BAMAS-Mathias/ptut-2-tv-connectees"], "Decouvrir": [discoverIcon,"https://testserveur.alwaysdata.net/secretary/welcome/"] }}>
        </Projet>
        <Projet
            title={"ChirpChat"}
            description={"Chirpchat est un réseaux social réalisé en PHP. Plusieurs fonctionnalités sont disponibles tel que l'ajout de post, de commentaires, de tags. Une messagerie entre utilisateur ainsi que des outils d'administration sont également inclus."}
            img={chirpchatBg}
            languageList={["PHP","HTML","CSS","JAVASCRIPT","SQL"]}
            linksMap={{'GitHub': [gitIcon,"https://github.com/BAMAS-Mathias/ChirpChat"], "Decouvrir": [discoverIcon,"https://chirpchat.alwaysdata.net/index.php"] }}>
        </Projet>
        <Projet
            title={"Seismic Viewer"}
            description={"Seismic Viewer est un projet réalisé en Java permettant de visualisé des données relatives aux séismes. Le logiciel dispose d'une interface graphique, il permet egalement l'importation de fichier CSV. Les diverses données peuvent être visualisées à l'aide de différents outils, tels qu'une carte, des tableaux ou des graphiques.  "}
            img={seismisViewerBg}
            languageList={["JAVA","FXML"]}
            linksMap={{'GitHub': [gitIcon,"https://github.com/BAMAS-Mathias-2225005a/SeismicViewer"] }}>
        </Projet>
        <Projet
            title={"Worldcup Rewind"}
            description={"Worldcup Rewind est un site réalisé à l'occasion de la coupe du monde 2022. Ce projet permet de retracer les différentes coupes du mondes ainsi que leur recors au fil de l'histoire"}
            img={wcRewindBg}
            languageList={["HTML","CSS","JAVASCRIPT"]}
            linksMap={{'GitHub': [gitIcon,"https://github.com/mathiasbamas/Coupe-du-Monde"], "Decouvrir": [discoverIcon,"https://mathiasbamas.github.io/Coupe-du-Monde/"] }}>
        </Projet>
    </div>
)

export default Projets;