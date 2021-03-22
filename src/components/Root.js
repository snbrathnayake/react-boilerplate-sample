import React, { StrictMode } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import App from 'containers/App';

const Root = props => {

    const { store, history } = props;

    return (
        <StrictMode>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                    {/* <ErrorModal history={history} /> */}
                </ConnectedRouter>
            </Provider>
        </StrictMode>
    );
}

export default Root;