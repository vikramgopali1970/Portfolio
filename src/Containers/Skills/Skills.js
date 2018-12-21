import React from 'react';
import './Skills.css';
import WrapperRow from "../../HOC/MainComponentWrapperRow/MainComponentWrapperRow";
import SkillCard from "../../Components/SkillCard/SkillCard";
import WrapperColumn from "../../HOC/MainComponentWrapperColumn/MainComponentWrapperColumn";



const Skills = ()=>(
        <WrapperColumn>
            <div className="skillsHeader">
                <label>Technologies Worked with :</label>
            </div>
            <div className="skillsBody">
                <WrapperRow>
                    <SkillCard skillImg={'angularjs'} />
                    <SkillCard skillImg={'reactjs'} />
                    <SkillCard skillImg={'nodejs'} />
                    <SkillCard skillImg={'mongodb'} />
                    <SkillCard skillImg={'mysql'} />
                    <SkillCard skillImg={'aws'} />
                    <SkillCard skillImg={'nginx'} />
                    <SkillCard skillImg={'java'} />
                    <SkillCard skillImg={'python'} />
                    <SkillCard skillImg={'golang'} />
                    <SkillCard skillImg={'ppjs'} />
                    <SkillCard skillImg={'docker'} />
                </WrapperRow>
            </div>
        </WrapperColumn>
);

export default Skills;