import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import { deleteInvoice } from '../../actions/deleteInvoice'



class Invoices extends React.Component {
  handleDelete = (invoice) => {
    // debugger
    this.props.deleteInvoice(invoice.id, invoice.account_id)
  }

 
  render() {
  
    return (
      <div>
        
        <div className="table-responsive">
          <table className="table table-hover invoice-table">
            <thead>
              <tr>
                <th>Invoice Id</th>
                <th>Due Date</th>
                <th>Client Name</th>
                <th>Amount Due</th>
                <th>Status</th>
                <th></th>
              </tr>          
            </thead>
            <tbody>
            {this.props.invoices && this.props.invoices.map(invoice => {
             
             let invoicePath = `/accounts/${invoice.account_id}/invoices/${invoice.id}`;

              return (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.payment_due}</td>
                  <td>{invoice.client_name}</td>
                  <td>{invoice.invoice_total}</td>
                  <td>{invoice.status}</td>
                  <td><Link to={invoicePath} className="view-btn"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>              
                </tr>
              )
            })}
            </tbody>
          </table>  
        </div>
      </div>
  )}
  
}

export default connect(null, {deleteInvoice})(Invoices)