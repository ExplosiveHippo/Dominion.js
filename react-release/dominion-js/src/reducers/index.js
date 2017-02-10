import * as types from '../actions/actionTypes';

const initialState = {
	user: null,

};

export default function app(state = initialState, action = {}) {
	switch (action.type) {
		case types.BUY_CARD:
			return {
			...state,
			//user: action.user || initialState.user
			}

		default:
			return state;
	}
}


export {
  app,
};