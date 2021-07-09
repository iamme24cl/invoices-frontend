export const addAccount = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch('https://stark-woodland-38333.herokuapp.com/api/v1/accounts', {
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