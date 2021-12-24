// ACTIONS 

const GET_ACCOUNT = "GET_ACCOUNT";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";
const ADD_ACCOUNT = "ADD_ACCOUNT";
const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";

// ACTION CREATORS

export const gotAccount = (account) => {
  return {
    type: GET_ACCOUNT,
    account 
  };
};

export const setFetchingStatus = (isFetching) => {
  return {
    type: SET_FETCHING_STATUS,
    isFetching
  };
};

export const addAccount = (account) => {
  return {
    type: ADD_ACCOUNT,
    account,
  };
};

export const updateAccount = (prospect) => {
  return {
    type: UPDATE_ACCOUNT,
    prospect,
  };
};

// REDUCER 

const reducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case GET_ACCOUNT: 
      return action.account;
    case SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ADD_ACCOUNT:
      return action.account
    case UPDATE_ACCOUNT:
      return action.account
    default: 
      return state;
  }
};

export default reducer;
