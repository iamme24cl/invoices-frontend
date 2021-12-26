import axios from "axios";
import CONSTANTS from "./constants";
import { gotAccount, setFetchingStatus, addAccount, updateAccount } from "../account";
import { getInvoices, addInvoice, updateInvoice, deleteInvoice} from "../invoices";

const { API_ENDPOINTS: { BASE } } = CONSTANTS;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("invoices-app-token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

// ACCOUNT THUNK CREATORS
export const fetchAccount = () => async (dispatch) => {
  dispatch(setFetchingStatus(true));
  try {
    const { data } = await axios.get(`${BASE}/api-keys`);
    dispatch(gotAccount(data));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/api-keys`, credentials);
    localStorage.setItem("invoices-app-token", data.api_keys[data.api_keys.length - 1].token);
    localStorage.setItem("invoices-app-token-id", data.api_keys[data.api_keys.length - 1].id);
    dispatch(gotAccount(data));
  } catch (error) {
    console.error(error);
    dispatch(gotAccount({ error: error.response.data.error || "Server Error" }))
  }
}

export const postAccount = (body) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/accounts`, body);
    localStorage.setItem("invoices-app-token", data.api_keys[data.api_keys.length - 1].token);
    localStorage.setItem("invoices-app-token-id", data.api_keys[data.api_keys.length - 1].id);
    dispatch(addAccount(data));
  } catch (error) {
    console.error(error);
  }
};

export const editAccount = (body, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${BASE}/accounts/${id}`, body);
    dispatch(updateAccount(data));
  } catch (error) {
    console.error(error)
  }
};

export const logout = () => async (dispatch) => {
  const tokenId = localStorage.getItem("invoices-app-token-id");
  try {
    await axios.delete(`${BASE}/api-keys/${tokenId}`);
    localStorage.removeItem("invoices-app-token");
    localStorage.removeItem("invoices-app-token-id");
    dispatch(gotAccount({}));
  } catch (error) {
    console.error(error);
  } finally {
    dispatch(setFetchingStatus(false));
  }
}

// INVOICE THUNK CREATORS
export const fetchInvoices = (accountId) => async (dispatch) => {
  try {
    const { data} = await axios.get(`${BASE}/accounts/${accountId}/invoices`)
    dispatch(getInvoices(data))
  } catch (error) {
    console.error(error);
  }
}

export const postInvoice = (body, accountId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE}/accounts/${accountId}/invoices`, body);
    dispatch(addInvoice(data));
  } catch (error) {
    console.error(error);
  }
}

export const editInvoice = (body, accountId, id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${BASE}/accounts/${accountId}/invoices/${id}`, body);
    dispatch(updateInvoice(data));
  } catch (error) {
    console.error(error);
  }
};

export const destroyInvoice = (accountId, id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE}/accounts/${accountId}/invoices/${id}`);
    dispatch(deleteInvoice(id));
  } catch (error) {
    console.error(error);
  }
}
