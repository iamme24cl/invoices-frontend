const accountReducer = (state = {accounts: []}, action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accounts: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts, action.payload]}
    case 'EDIT_ACCOUNT':
      let accounts = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
    return {...state, accounts: accounts}
    case 'ADD_INVOICE':
      let accounts1 = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accounts1}
    case 'EDIT_INVOICE':
      let accounts2 = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accounts2}
    case 'DELETE_INVOICE':
      let accounts3 = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
          return account
        }
      })
      return {...state, accounts: accounts3}   
    default:
      return state
  }

}

export default accountReducer;