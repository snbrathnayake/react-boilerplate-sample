import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CaptureRouteNotFound from "components/CaptureRouteNotFound";
import ErrorBoundary from "components/ErrorBoundary";
import renderRoutesInPath from 'utils/RouterUtils';
import routes from 'routes';
import Navbar from 'components/common/Navbar';
import AppFooter from 'components/common/Footer';

class App extends React.Component {

  // no-useless-constructor
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { history } = this.props;
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Router>
            <CaptureRouteNotFound>
              <Navbar />
              <Switch children={renderRoutesInPath(routes)} />
              <AppFooter />
            </CaptureRouteNotFound>
          </Router>
        </ErrorBoundary>
        {/* <LatesEvent/>
      <WelcomeModal /> */}
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    appLoadState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appLoadActions: () => dispatch(() => { })
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

