import React from 'react';
import gmail from "../../Assets/Images/gmail.png";
import '../../Containers/ProfileLinks/ProfileLinks.css';


const GMAIL = "mailto:vikramgopali.93@gmail.com";

const GmailLink = ()=>(
    <div className="linkWrapper">
        <a href={GMAIL}>
            <img src={gmail} alt="github icon" className="github" />
        </a>
    </div>
);

export default GmailLink;