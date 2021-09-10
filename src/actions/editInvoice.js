import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const editInvoice = (data, accountId, invoiceId) => {
  return (dispatch) => {
    fetch(`${DEV_URL}/${accountId}/invoices/${invoiceId}`, {
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

