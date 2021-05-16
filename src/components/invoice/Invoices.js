import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import { deleteInvoice } from '../../actions/deleteInvoice'
import InvoiceList from './InvoiceList'


class Invoices extends React.Component {
  handleDelete = (invoice) => {
    // debugger
    this.props.deleteInvoice(invoice.id, invoice.account.id)
  }

 
  render() {
  
    return (
      <div>
        <InvoiceList account={this.props.account} invoices={this.props.invoices} />
      </div>
  )}
  
}

export default connect(null, {deleteInvoice})(Invoices)