import { ROUTES } from 'constants/route-constants';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withPermissionUserCheck = (WrappedComponent) => {

    const HOC = class C extends React.Component {
        render() {
            // let path = accessCheck(this.props);
            const { isLogged } = this.props;
            console.log(isLogged)
            if (!isLogged) {
                return <Redirect to={ROUTES.HOME} />
            }
            return (
                <div className="col">
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    };

    function mapStateToProps(state) {
        return {
            isLogged: state.auths.isLoggedIn,
        }
    }

    return connect(mapStateToProps)(HOC);
};