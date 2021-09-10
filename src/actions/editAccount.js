import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const editAccount = (data, accountId) => {
  return (dispatch) => {
    fetch(`${DEV_URL}/${accountId}`, {
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