/**
 * Action Creators
 */

import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
} from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await streams.post('/streams', { ...formValues, userId });
	dispatch({
		type: CREATE_STREAM,
		payload: response.data,
	});
	history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');
	dispatch({
		type: FETCH_STREAMS,
		payload: response.data,
	});
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({
		type: FETCH_STREAM,
		payload: response.data,
	});
};

export const deleteStream = (id, formValues) => async (dispatch) => {
	await streams.delete(`/streams/${id}`, formValues);
	dispatch({
		type: DELETE_STREAM,
		payload: id,
	});
};

export const editStream = (id, formValues) => async (dispatch) => {
	const response = await streams.patch(`/streams/${id}`, formValues);
	dispatch({
		type: EDIT_STREAM,
		payload: response.data,
	});
	history.push('/');
};
