export const deleteInvoice = (invoiceId, accountId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/invoices/${invoiceId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => {
      console.log(account);
      dispatch({type: 'DELETE_INVOICE', payload: account});
    })
  }
}