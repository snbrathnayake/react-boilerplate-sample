import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from 'redux/reducers/authReducer';
import commentReducer from 'redux/reducers/commentReducer';


const rootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		auths:authReducer,
		comments:commentReducer
	});

export default rootReducer;