export const fetchAccounts = ()  => {
  return (dispatch) => {
    fetch('https://stark-woodland-38333.herokuapp.com/api/v1/accounts')
    .then(resp => resp.json())
    .then(accounts => dispatch({
      type: 'FETCH_ACCOUNTS',
      payload: accounts
    }))    
  }
}