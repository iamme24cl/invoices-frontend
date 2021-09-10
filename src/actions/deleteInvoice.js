import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const deleteInvoice = (invoiceId, accountId) => {

  return (dispatch) => {
    fetch(`${DEV_URL}/${accountId}/invoices/${invoiceId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => {
      // console.log(account);
      dispatch({type: 'DELETE_INVOICE', payload: account});
    })
  }
}