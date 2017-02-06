import * as types from '../actions/actionTypes';

const initialState = {
	user: null,
	userHasTrips: false,
	userTrialOver: false,
	currentRoute: null,
	currentTags: [],
	currentTag: null,
	currentVehicleToTag: {},
	currentVehicles: [],
	currentPageRequiresLoading: false,
	loading: false,
	loadSuccess: true,
	navbarVisible: false,
	globalNavAccesible: false,
	readyToRender: false,
	connectedToInternet: false,
	tripRecordingPauseState: {
		label: 'Off',
		value: 0
	},
	byMile: false,
	deviceType: 'tag',
	alertQueue: [],
	modal: null,
	modalClosable: true
};

export default function app(state = initialState, action = {}) {
	switch (action.type) {
		case types.SET_USER:
			return {
			...state,
			user: action.user || initialState.user
			}
		case types.SET_USER_HAS_TRIPS:
			return {
			...state,
			userHasTrips: action.userHasTrips || initialState.userHasTrips
			}
		case types.SET_USER_HAS_TRIPS:
			return {
			...state,
			userTrialOver: action.userTrialOver|| initialState.userTrialOver
			}
		case types.UPDATE_ROUTE:
			return {
			...state,
			currentRoute: action.route
			}
		case types.VEHICLE_TO_TAG:
			return {
				...state,
				currentVehicleToTag: action.vehicle
			}
		case types.UPDATE_CURRENT_TAG:
			return {
				...state,
				currentTag: action.tag
			}
		case types.UPDATE_VEHICLES:
			return {
				...state,
				currentVehicles: action.vehicles
			}
		case types.REQUIRES_LOADING:
			return {
				...state,
				currentPageRequiresLoading: action.requiresLoading
			}
		case types.LOADING:
			return {
				...state,
				loading: action.loading
			}
		case types.LOAD_SUCCESS:
			return {
				...state,
				loadSuccess: action.loadSuccess
			}
		case types.SET_NAVBAR_VISIBLE:
			return {
				...state,
				navbarVisible: action.visible
			}
		case types.SET_MENU_ACCESIBLE:
			return {
				...state,
				globalNavAccesible: action.accesible
			}
		case types.SET_APP_READY_TO_RENDER:
			return {
				...state,
				readyToRender: action.ready
			}
		case types.SET_CONNECTED_TO_INTERNET:
			return {
				...state,
				connectedToInternet: action.isConnected
			}
		case types.SET_TRIP_RECORDING_PAUSE_STATE:
			return {
				...state,
				tripRecordingPauseState: (action.pauseState !== undefined ? action.pauseState : initialState.tripRecordingPauseState)
			}
		case types.SET_BYMILE:
			return {
				...state,
				byMile: (action.byMile)
			}
		case types.SET_DEVICE_TYPE:
			return {
				...state,
				deviceType: (action.deviceType || initialState.deviceType)
			}
		case types.ALERT_QUEUE_ADD:
			if(action.alert) {
				return {
					...state,
					alertQueue: [...state.alertQueue, action.alert]
				}
			}
			return {
				...state,
				alertQueue: initialState.alertQueue
			}
		case types.ALERT_QUEUE_REMOVE:
			if(state.alertQueue.length) {
				return {
					...state,
					alertQueue: state.alertQueue.slice(1)
				}
			}
			return {
				...state,
				alertQueue: initialState.alertQueue
			}
		case types.SET_MODAL:
			return {
				...state,
				modal: (action.modal || initialState.modal),
				modalClosable: (action.modal ? state.modalClosable : initialState.modalClosable)
			}
		case types.SET_MODAL_CLOSABLE:
			return {
				...state,
				modalClosable: ('closable' in action ? action.closable : initialState.modalClosable)
			}

		default:
			return state;
	}
}
