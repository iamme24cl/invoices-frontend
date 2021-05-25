export const addAccount = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch('http://localhost:3000/api/v1/accounts', {
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