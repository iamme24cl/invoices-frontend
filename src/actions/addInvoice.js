export const addInvoice = (data, accountId) => {
  return (dispatch) => {
    fetch(`https://stark-woodland-38333.herokuapp.com/api/v1/accounts/${accountId}/invoices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => {
      // console.log(account);
      dispatch({type: 'ADD_INVOICE', payload: account});
    })
  }
}