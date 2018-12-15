import React from 'react';
import './MainComponentWrapper.css';

const Wrapper = (props)=>{
    let divs = [...props.children];
    return(
        <div className="MainWrapper">
            {divs}
        </div>
    );
};

export default Wrapper;