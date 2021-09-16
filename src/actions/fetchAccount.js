import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const fetchAccount = (userData)  => {
  return (dispatch) => {
    fetch(`${DEV_URL}/api-keys`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(account => {
        console.log(account)
        let api_key = account.api_keys[account.api_keys.length - 1]
        localStorage.setItem("token", api_key.token);
        localStorage.setItem("tokenID", api_key.id);
        localStorage.setItem("loggedIn", true);
        return dispatch({
          type: 'FETCH_ACCOUNT',
          payload: {account: account, loggedIn: true}
        })
    })    
  }
}

