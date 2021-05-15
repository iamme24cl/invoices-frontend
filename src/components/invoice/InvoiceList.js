import React from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';


const InvoiceList = (props) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover invoice-table">
        <thead>
          <tr>
            <th>Invoice Id #</th>
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
          {/* const randomString = () => Math.random().toString(20).substr(2, 6).toUpperCase(); */}
          return (
            <tr key={invoice.id}>
              <td>{invoice.random_code + invoice.id}</td>
              <td><Moment format="LL">{invoice.payment_due}</Moment></td>
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