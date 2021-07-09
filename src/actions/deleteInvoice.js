export const deleteInvoice = (invoiceId, accountId) => {

  return (dispatch) => {
    fetch(`https://stark-woodland-38333.herokuapp.com/${accountId}/invoices/${invoiceId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => {
      // console.log(account);
      dispatch({type: 'DELETE_INVOICE', payload: account});
    })
  }
}