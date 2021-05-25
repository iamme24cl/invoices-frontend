export const addAccount = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({
      type: 'ADD_ACCOUNT',
      payload: account
    }))
    .catch((error) => {
      console.log('Error:', error)
    })

  }
}