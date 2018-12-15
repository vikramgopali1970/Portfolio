import React from 'react';
import linkedin from '../../Assets/Images/linkedin.png';
import '../../Containers/ProfileLinks/ProfileLinks.css';


const LINKED_IN = "https://github.com/vikramgopali1970";

const LinkedInLink = ()=>(
    <div className="linkWrapper">
        <a href={LINKED_IN} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="github icon" className="github" />
        </a>
    </div>
);

export default LinkedInLink;