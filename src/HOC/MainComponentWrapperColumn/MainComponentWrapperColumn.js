import React from 'react';
import './MainComponentWrapperColumn.css';

const WrapperColumn = (props)=>{
    let divs = [...props.children]
    return(
        <div className="MainWrapperColumn">
            {divs}
        </div>
    );
};

export default WrapperColumn;