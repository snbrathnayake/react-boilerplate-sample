import React, { StrictMode } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import ErrorBoundary from 'components/ErrorBoundary';
import App from 'containers/App';

const Root = props => {
    const { store, history } = props;
    const redirectMessage = 'Try Again';
    const redirectUrl = '/';

    return (
        <StrictMode>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ErrorBoundary redirectMessage={redirectMessage} redirectUrl={redirectUrl}>
                        <App />
                    </ErrorBoundary>
                </ConnectedRouter>
            </Provider>
        </StrictMode>
    );
}

export default Root;