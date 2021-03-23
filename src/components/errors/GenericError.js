import React from 'react';

const GenericError = props => {
    const { errorMessage, errorId } = props;

    return (
        <div className="grid">
            <div className="error-msg">
                <strong>{errorMessage}</strong>
            </div>
            <div className="font--h6 mv--">{props.children}</div>
            <pre>{errorId}</pre>
        </div>
    );
};

export default GenericError;