export const editAccount = (data, accountId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}`, {
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