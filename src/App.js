import React from 'react';
import HeroBanner from "./containers/hero-banner/hero-banner";
import './app.css'
import './variable.css'
import Parcours from "./containers/parcours/Parcours";

const App = () => {
    return (
        <div>
            <HeroBanner />
            <Parcours />
        </div>
    );
}

export default App;
