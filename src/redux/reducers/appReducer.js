// TODO import { appAPI } from 'api';

// Constants
const INITIALIZED_SUCCESS =
  'eversis-excersise-frontend/appReducer/INITIALIZED_SUCCESS';
//------------

// InitialState
const initialState = {
  initialized: true, // TODO change to false after adding the server connection in API
};
//------------

// Dispatch Actions
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};
//------------

// Action Creators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
//------------

// Thunk Creators
export const initializeApp = () => (dispatch) => {
  // TODO add connection to a server in API
  // const promise = await appAPI.сheckAPI();
  // if (promise) {
  dispatch(initializedSuccess());
  // }
};
//------------

export default appReducer;
