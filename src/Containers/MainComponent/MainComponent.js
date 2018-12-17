import React from 'react';
import './MainComponent.css';
import Routes from "../../HOC/Router";
import WrapperColumn from "../../HOC/MainComponentWrapperColumn/MainComponentWrapperColumn";
import NavBar from "../../Components/NavBar/NavBar";

const Main = ()=>(
    <div className="main">
        <WrapperColumn>
            <NavBar/>
            <Routes/>
        </WrapperColumn>

    </div>

);

export default Main;