import React from 'react';
import vikram from '../../Assets/Images/vikramgopali.jpg';
import './ProfilePicture.css';

const Picture = ()=>(
    <div>
        <img src={vikram} alt="profile" className="picture" />
    </div>
);

export default Picture;