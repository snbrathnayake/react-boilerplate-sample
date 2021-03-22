import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from 'redux/reducers/authReducer';


const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		authReducer
	});

export default rootReducer;