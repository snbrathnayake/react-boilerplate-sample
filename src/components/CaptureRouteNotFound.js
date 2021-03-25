import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import NotFoundPage from 'components/errors/NotFound404';

const CaptureRouteNotFound = props => {

    const { location, children } = props;
    const { state = {} } = location;
    const { notFoundError } = state;

    return notFoundError ? (
        <div>
            <div className="flex">
                <div className="col-1-1">
                    <NotFoundPage />
                </div>
            </div>
        </div>
    ) : (
        <Fragment>{children}</Fragment>
    );
};

export default withRouter(CaptureRouteNotFound);