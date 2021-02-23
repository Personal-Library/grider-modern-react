import { FETCH_POSTS } from '../constants/actionTypes';

// First argument passed to the reducer is state, we initialize it because it cannot EVER be undefined, and it is usually whatever was returned by the reducer the last time it was run.
export const postsReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return action.payload;
		default:
			return state;
	}
};
