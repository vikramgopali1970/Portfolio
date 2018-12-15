import React from 'react';
import github from "../../Assets/Images/github.png";
import '../../Containers/ProfileLinks/ProfileLinks.css';


const GIT_HUB = "https://www.linkedin.com/in/vikramgopali/";

const GithubLink = ()=>(
    <div className="linkWrapper">
        <a href={GIT_HUB} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github icon" className="github" />
        </a>
    </div>
);

export default GithubLink;