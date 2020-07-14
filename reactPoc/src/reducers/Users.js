import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MOCK_USERS_SUCCESS,
} from "../actions/Users.js";

const initialState = {
  users: [],
  mockUsers: [],
};

function Users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.usersList,
      };
    case GET_USERS_FAILURE:
      return {
        error: action.error,
      };
    case GET_MOCK_USERS_SUCCESS:
      return {
        ...state,
        mockUsers: action.list,
      };

    default:
      return state;
  }
}

export default Users;
