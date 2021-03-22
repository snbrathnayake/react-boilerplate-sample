import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import renderRoutesInPath from 'utils/RouterUtils';
import routes from 'routes';

class App extends React.Component {

  // no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='App'>
        <Router>
          {/* <Navbar /> */}
          <div>
            <Switch children={renderRoutesInPath(routes)} />
          </div>
          {/* <AppFooter /> */}
        </Router>

      </div>
    )
  }
}

export default App;
