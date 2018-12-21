import React from "react";
import './SkillCard.css';

const SkillCard = (props)=>(
    <div className="skillCard">
        <div>
            <img src={require(`../../Assets/Images/${props.skillImg}.png`)}  alt="skill"/>
        </div>
        {/*<div style={{ width: '100px' }}>*/}
        {/*<CircularProgressbar*/}
        {/*percentage={percentage}*/}
        {/*text={`${percentage}%`}*/}
        {/*width={4}*/}
        {/*/>*/}
        {/*</div>*/}
    </div>
);

export default SkillCard;
