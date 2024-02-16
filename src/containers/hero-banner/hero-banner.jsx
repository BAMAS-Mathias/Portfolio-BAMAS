import React, {useEffect} from "react";
import './hero-banner.css';
import Presentation from "../../components/presentation/Presentation";
import Navbar from "../../components/navbar/Navbar";


const HeroBanner = () => {
    return <div className="hero__section">
        <div className={"hero__section__left-content"}>
            <Presentation/>
            <Navbar/>
        </div>
        <svg className={"hero__profile-image"} viewBox="125 125 760 690" xmlns="http://www.w3.org/2000/svg"
             width="100%" height="100%">
            <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="920" height="800">
                    <image href={require("../../assets/img/photo.jpg")} x="0" y="0" width="950" height="800"/>
                </pattern>
            </defs>
            <path fill="url(#img1)"
                  d="M826.5 633.5Q713 767 567.5 803.5T280 757q-142-83-149-260.5T263.5 198q139.5-121 288-34.5T820 375q120 125 6.5 258.5"
            />
        </svg>

    </div>

};

export default HeroBanner;
