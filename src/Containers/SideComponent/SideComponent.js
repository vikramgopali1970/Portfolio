import React from 'react';
import './SideComponent.css';
import Picture from '../../Components/ProfilePicture/ProfilePicture';
import Links from '../../Containers/ProfileLinks/ProfileLinks';
import Name from '../../Components/Name/Name';
import Quote from "../../Components/Quote/Quote";

const Side = ()=> (
    <div className="side">
        <Picture/>
        <Links/>
        <Name/>
        <Quote/>
    </div>
);

export default Side;