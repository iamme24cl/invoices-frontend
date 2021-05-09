const accountReducer = (state = {accounts: []}, action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      // debugger;
      // console.log(action)
      return {accounts: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts, action.payload]}
    default:
      return state
  }

}

export default accountReducer;