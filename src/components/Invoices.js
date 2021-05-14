import React from 'react'
import {connect} from 'react-redux'
import { deleteInvoice } from '../actions/deleteInvoice'

class Invoices extends React.Component {
  handleDelete = (invoice) => {
    // debugger
    this.props.deleteInvoice(invoice.id, invoice.account_id)
  }

  render() {
    return (
    <div>
      {this.props.invoices && this.props.invoices.map(invoice => {
        return (
          <li key={invoice.id}>
            {invoice.client_name} - 
            STATUS: {invoice.status} --- Invoice Total: ${invoice.invoice_total}
            
            <button onClick={() => this.handleDelete(invoice)}>Delete</button>
          </li>
        )
      })}
    </div>
  )}
  
}

export default connect(null, {deleteInvoice})(Invoices)