import { combineReducers } from 'redux';

/**
 * Import Reducers
 */

import { postsReducer } from './postsReducer';
import { usersReducer } from './usersReducer';

// This is now state, and we can access it using mapStateToProps inside of our components
export default combineReducers({
	posts: postsReducer,
	users: usersReducer,
});
