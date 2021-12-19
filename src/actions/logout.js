import CONSTANTS from '../store/utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const logout = () => {
	let token = localStorage.getItem("token");
  let tokenID = localStorage.getItem("tokenID")

	return (dispatch) => {
		fetch(`${LIVE_URL}/api-keys/${tokenID}`, {
      method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		})
		.then(res => res.json())
		.then(data => {
				console.log(data);
				return dispatch({
					type: 'LOGOUT',
					payload: {account: {}, loggedIn: false}
				})
		})
		.catch(error => console.log(error))
	}
}