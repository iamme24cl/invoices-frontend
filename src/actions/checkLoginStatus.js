import CONSTANTS from '../store/utils/constants';
const { API_ENDPOINTS: { DEV_URL, LIVE_URL } } = CONSTANTS

export const checkLoginStatus = () => {
	let token = localStorage.getItem("token");
	return (dispatch) => {
		fetch(`${LIVE_URL}/api-keys`, {
			headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		})
		.then(res => res.json())
		.then(data => {
				console.log(data);
				return dispatch({
					type: 'CHECK_LOGIN_STATUS',
					payload: data.status !== 401 ? {account: data, loggedIn: true} : {}
				})
		})
		.catch(error => console.log(error))
	}
}