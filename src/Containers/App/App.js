import React from 'react';
import Side from '../SideComponent/SideComponent';
import WrapperRow from '../../HOC/MainComponentWrapperRow/MainComponentWrapperRow'
import Main from "../MainComponent/MainComponent";

const App = ()=> (
    <div className="MainContainer">
        <WrapperRow >
            <Side/>
            <Main/>
        </WrapperRow>
    </div>
);

export default App;
