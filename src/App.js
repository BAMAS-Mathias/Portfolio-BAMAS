import React,{useEffect} from 'react';
import HeroBanner from "./containers/hero-banner/hero-banner";
import './app.css'
import './variable.css'
import Parcours from "./containers/parcours/Parcours";
import MesCompetences from "./containers/competences/mes-competences";

const App = () => {

    const handleScroll = () => {
        let hero_section_left = document.querySelector(".hero__section__left-content");
        if(document.documentElement.scrollTop > 903){
            hero_section_left.style.position = "absolute"
            hero_section_left.style.top = "149vh"
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
        </div>
    );

}



export default App;
