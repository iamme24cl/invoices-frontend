export const editAccount = (data, accountId) => {
  return (dispatch) => {
    fetch(`https://stark-woodland-38333.herokuapp.com/api/v1/accounts/${accountId}`, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => {
      console.log(account);
      dispatch({type: 'EDIT_ACCOUNT', payload: account});
    })
  }
}