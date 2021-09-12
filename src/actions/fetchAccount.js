import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const fetchAccount = (id)  => {
  return (dispatch) => {
    fetch(`${DEV_URL}/${id}`)
    .then(resp => resp.json())
    .then(account => dispatch({
      type: 'FETCH_ACCOUNT',
      payload: account
    }))    
  }
}

