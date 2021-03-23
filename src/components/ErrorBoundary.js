import React, { Component } from 'react';
import ErrorService from 'utils/ErrorService';
import GenericError from 'components/errors/GenericError';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            errorId: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        ErrorService.capture(error, errorInfo);
        const errorId = ErrorService.lastEventId();
        this.setState({
            error,
            errorInfo,
            errorId,
        });
    }

    render() {
        const errorMessage = 'An error has occurred';
        const contactInfo = (
            <div>
                Please try again or with the error code below if the issue persists.
            </div>
        );
        const { errorInfo } = this.state;
        if (errorInfo) {
            return (
                <div>
                    <GenericError
                        errorMessage={errorMessage}
                        errorId={this.state.errorId}>
                        {contactInfo}
                    </GenericError>
                </div>
            );
        };
        return this.props.children;
    }
};

export default ErrorBoundary;