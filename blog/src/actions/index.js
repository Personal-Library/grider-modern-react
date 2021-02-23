import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS, FETCH_USER } from '../constants/actionTypes';
import _ from 'lodash';

/**
 * Action Creators
 */


// Reduce thunk allows us to pass functions inside of our action creators so that we could handle asynchronous actions
export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({
		type: FETCH_POSTS,
		payload: response.data,
	});
};

// Complicated but elegant lodash solution for memoizing fetch requests
// The downside of this method is that if you update user information and need to request new data from the server for a previously memoized user, it will not be possible.
// Probably not the best solution then since app should try to stay dynamic
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({ type: FETCH_USER, payload: response.data });
// });

// Alternate solution creates another function
export const fetchUser = (id) => async (dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach((id) => dispatch(fetchUser(id)))
		.value();
};
