const accountReducer = (state = {loggedIn: false, account: {}}, action) => {
  switch (action.type) {
    case 'CHECK_LOGIN_STATUS': {
      return {...state, loggedIn: action.payload.loggedIn, account: action.payload.account}
    }

    case 'FETCH_ACCOUNT': {
      return {loggedIn: action.payload.loggedIn, account: action.payload.account};
    }

    case 'ADD_ACCOUNT': {
      return {...state, loggedIn: action.payload.loggedIn, account: action.payload.account};

    }

    case 'EDIT_ACCOUNT': {
      return {...state, account: account(state, action)};
    }
      
    case 'ADD_INVOICE': {
      return {...state, account: account(state, action)};
    }
      
    case 'EDIT_INVOICE': {
      return {...state, account: account(state, action)};
    }
      
    case 'DELETE_INVOICE': {
      return {...state, account: account(state, action)};   
    }
      
    default: {
      return state;
    }
  }

}

const account = (state, action) => {
  let tempAccount = state.account.id === action.payload.id ? action.payload : state.account;
  return tempAccount;
}

export default accountReducer;