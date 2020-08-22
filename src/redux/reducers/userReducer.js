// TODO import { userAPI } from 'api';

// Constants
const SET_USER = 'eversis-excersise-frontend/userReducer/SET_USER';
//------------

// InitialState
const initialState = {
  user: {
    name: 'Artur',
    surname: 'Shkred',
    age: null,
  },
};
//------------

// Dispatch Actions
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
//------------

// Action Creators
export const setUser = (user) => ({
  type: SET_USER,
  user,
});
//------------

// Thunk Creators
export const updateUserData = (user) => async (dispatch) => {
  // TODO userAPI
  //   const response = await userAPI.updateUserData(user);
  //   if (response.status === 200)
  dispatch(setUser(user));
};
//------------

export default userReducer;
