import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS } from '../constants/actionTypes';

/**
 * Action Creators
 */

export const fetchPosts = () => async (dispatch) => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({
		type: FETCH_POSTS,
		payload: response,
	});
};
