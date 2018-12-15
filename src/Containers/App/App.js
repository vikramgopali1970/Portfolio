import React, { Component } from 'react';
import Side from '../SideComponent/SideComponent';
import Main from '../../Components/MainComponent/MainComponent';
import Wrapper from '../../HOC/MainComponentWrapper/MainComponentWrapper'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn);

class App extends Component {
  render() {
    return (
          <Wrapper >
              <Side/>
              <Main/>
          </Wrapper>
    );
  }
}

export default App;
