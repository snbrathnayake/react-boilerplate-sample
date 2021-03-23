import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

function RouteSplitter(props) {

    const { component: Component, location, routes = [], redirect, ...rest } = props;

    if (redirect) {
        const to = {
            pathname: location.pathname.replace(props.from, props.to),
            state: { status: 301 }
        }
        return <Redirect to={to} />
    }

    return (
        <Route
            {...rest}
            render={props => {
                return (
                    <Fragment>
                        <div className='splitter-wrapper'>
                            <Component {...props} routes={routes} />
                        </div>
                    </Fragment>
                )
            }}
        />
    );

};

export default RouteSplitter;