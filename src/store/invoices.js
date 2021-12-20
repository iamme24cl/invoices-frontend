import {
  addInvoiceToStore,
  updateInvoiceInStore,
  deleteInvoiceFromStore,
} from "./utils/reducerFunctions";

// ACTIONS

const GET_INVOICES = "GET_INVOICES";
const ADD_INVOICE = "ADD_INVOICE";
const UPDATE_INVOICE = "UPDATE_INVOICE";
const DELETE_INVOICE = "DELETE_INVOICE";

// ACTION CREATORS
export const getInvoices = (invoices) => {
  return {
    type: GET_INVOICES,
    invoices,
  }
};

export const addInvoice = (invoice) => {
  return {
    type: ADD_INVOICE,
    invoice,
  }
};

export const updateInvoice = (invoice) => {
  return {
    type: UPDATE_INVOICE,
    invoice,
  }
};

export const deleteInvoice = (id) => {
  return {
    type: DELETE_INVOICE,
    id,
  }
};

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_INVOICES: 
      return action.invoices;
    case ADD_INVOICE:
      return addInvoiceToStore(state, action.invoice);
    case UPDATE_INVOICE:
      return updateInvoiceInStore(state, action.invoice);
    case DELETE_INVOICE:
      return deleteInvoiceFromStore(state, action.id);
    default:
      return state;
  }
}

export default reducer;