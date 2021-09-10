import CONSTANTS from '../utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const addAccount = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch(DEV_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => {
      console.log('d')
      return dispatch({
        type: 'ADD_ACCOUNT',
        payload: account
      })
    })
    .catch((error) => {
      console.log('Error:', error)
    })
    console.log('e')
  }
}