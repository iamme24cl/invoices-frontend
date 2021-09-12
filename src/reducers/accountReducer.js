const accountReducer = (state = {isloggedIn: false, account: {}}, action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNT': {
      return {account: action.payload};
    }

    case 'ADD_ACCOUNT': {
      return {...state, account: action.payload};

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