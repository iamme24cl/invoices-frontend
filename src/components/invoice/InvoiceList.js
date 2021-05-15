import React from 'react';
import {Link} from 'react-router-dom'

const InvoiceList = (props) => {
  return (
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
        {props.invoices && props.invoices.map(invoice => {
          
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
  )
}

export default InvoiceList;