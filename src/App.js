import React,{useEffect} from 'react';
import HeroBanner from "./containers/hero-banner/hero-banner";
import './app.css'
import './variable.css'
import Parcours from "./containers/parcours/Parcours";
import MesCompetences from "./containers/competences/mes-competences";
import Projets from "./containers/projets/projets";

const App = () => {

    const handleScroll = () => {
        let hero_section_left = document.querySelector(".hero__section__left-content");
        if(document.documentElement.scrollTop > 900){
            hero_section_left.style.position = "absolute"
            hero_section_left.style.top = "145vh"
        }else{
            hero_section_left.style.position = "fixed";
            hero_section_left.style.top = "47vh";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <div>
            <HeroBanner />
            <Parcours />
            <MesCompetences />
            <Projets />
        </div>
    );

}



export default App;
