import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const fetchAccounts = ()  => {
  return (dispatch) => {
    fetch(DEV_URL)
    .then(resp => resp.json())
    .then(accounts => dispatch({
      type: 'FETCH_ACCOUNTS',
      payload: accounts
    }))    
  }
}

