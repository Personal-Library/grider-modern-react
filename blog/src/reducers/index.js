import { combineReducers } from 'redux';

/**
 * Import Reducers
 */

import { postsReducer } from './postsReducer';

export default combineReducers({
	postsReducer,
});
