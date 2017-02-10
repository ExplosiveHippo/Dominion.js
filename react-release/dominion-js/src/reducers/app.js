import * as types from '../actions/actionTypes';

const initialState = {
	user: null,

};

export default function app(state = initialState, action = {}) {
	switch (action.type) {
		case types.SET_USER:
			return {
			...state,
			user: action.user || initialState.user
			}

		default:
			return state;
	}
}
