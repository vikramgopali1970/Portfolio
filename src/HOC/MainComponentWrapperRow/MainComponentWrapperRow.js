import React from 'react';
import './MainComponentWrapperRow.css';

const WrapperRow = (props)=>{
    let divs = [...props.children];
    return(
        <div className="MainWrapperRow">
            {divs}
        </div>
    );
};

export default WrapperRow;