import fetchUsers, { fetchMockUsers } from "../services/Users.js";

export function getUsers() {
  return async function getUsersThunk(dispatch) {
    try {
      const response = await fetchUsers();
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      dispatch(getUsersFailure(error));
    }
  };
}

export function getMockUsers() {
  return async function getUsersThunk(dispatch) {
    try {
      const response = await fetchMockUsers();
      dispatch(getMockUsersSuccess(response.data));
    } catch (error) {
      //dispatch(getUsersFailure(error));
    }
  };
}

export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    error,
  };
}

export const GET_MOCK_USERS_SUCCESS = "GET_MOCK_USERS_SUCCESS";

export function getMockUsersSuccess(list) {
  return {
    type: GET_MOCK_USERS_SUCCESS,
    list,
  };
}

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export function getUsersSuccess(usersList) {
  return {
    type: GET_USERS_SUCCESS,
    usersList,
  };
}
