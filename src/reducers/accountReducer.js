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
      return {...state, account: action.payload};
    }
      
    case 'ADD_INVOICE': {
      return {...state, account: action.payload};
    }
      
    case 'EDIT_INVOICE': {
      return {...state, account: action.payload};
    }
      
    case 'DELETE_INVOICE': {
      return {...state, account: action.payload};   
    }

    case 'LOGOUT': {
      return {...state, loggedIn: action.payload.loggedIn, account: action.payload.account}
    }
      
    default: {
      return state;
    }
  }

}

export default accountReducer;



