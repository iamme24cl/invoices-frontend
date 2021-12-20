// INVOICES

export const addInvoiceToStore = (state, invoice) => {
  return [invoice, ...state];
};

export const updateInvoiceInStore = (state, invoice) => {
  return state.map((invoiceObj) => {
    if (invoiceObj.id === invoice.id) {
      let updatedInvoice = invoice;
      return updatedInvoice;
    } else {
      return invoiceObj;
    }
  });
};

export const deleteInvoiceFromStore = (state, id) => {
  return state.filter(invoice => invoice.id !== id);
}
