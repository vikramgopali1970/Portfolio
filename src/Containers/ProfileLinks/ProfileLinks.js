import React from 'react';
import GithubLink from '../../Components/GitHubLink/GitHubLink';
import Gmail from '../../Components/GmailLink/GmailLink';
import LinkedIn from '../../Components/LinkedInLink/LinkedInLink';

import './ProfileLinks.css';




const Links = ()=>(
    <div className="linksMainWrapper">
        <GithubLink/>
        <LinkedIn/>
        <Gmail/>
    </div>

);

export default Links;