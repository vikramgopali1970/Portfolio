import React from 'react';
import './SideComponent.css';
import Picture from '../../Components/ProfilePicture/ProfilePicture';
import Links from '../../Containers/ProfileLinks/ProfileLinks';
import Name from '../../Components/Name/Name';

const Side = ()=> (
    <div className="side">
        <Picture/>
        <Links/>
        <Name/>
    </div>
);

export default Side;