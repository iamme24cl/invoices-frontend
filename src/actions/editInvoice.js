export const editInvoice = (data, accountId, invoiceId) => {
  return (dispatch) => {
    fetch(`https://stark-woodland-38333.herokuapp.com/api/v1/accounts/${accountId}/invoices/${invoiceId}`, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'EDIT_INVOICE', payload: account}))
  }
}

