import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const addAccount = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch(`${LIVE_URL}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({account: data})
    })
    .then(response => response.json())
    .then(account => {
      console.log('d');
      console.log(account);

      let api_key = account.api_keys[account.api_keys.length - 1]
      localStorage.setItem("token", api_key.token);
      localStorage.setItem("tokenID", api_key.id);
      localStorage.setItem("loggedIn", true);

      return dispatch({
        type: 'FETCH_ACCOUNT',
        payload: {account: account, loggedIn: true}
      })
    })
    .catch((error) => {
      console.log('Error:', error)
    })
    console.log('e')
  }
}