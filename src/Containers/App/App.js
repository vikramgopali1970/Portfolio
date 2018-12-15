import React from 'react';
import Side from '../SideComponent/SideComponent';
import Routes from '../../HOC/Router';
import Wrapper from '../../HOC/MainComponentWrapper/MainComponentWrapper'

const App = ()=>(
          <Wrapper >
              <Side/>
              <Routes/>
          </Wrapper>
    );

export default App;
