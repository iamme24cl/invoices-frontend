import CONSTANTS from '../store/utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const addInvoice = (data, accountId) => {
  return (dispatch) => {
    fetch(`${LIVE_URL}/accounts/${accountId}/invoices`, {
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