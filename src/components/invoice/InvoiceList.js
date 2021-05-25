import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment';


const InvoiceList = (props) => {
  const [filteredInvoices, setFilteredInvoices] = useState(props.invoices && props.invoices)
  console.log(filteredInvoices)
  let accountlLink =  props.account ? `/accounts/${props.account.id}/invoices/new` : null
  let accountEditLink = props.account ? `/accounts/${props.account.id}/edit` : null
  let invoices = props.invoices;
 

  const handleChange = (event) => {
    // console.log(event.target.value);
    console.log(invoices)
    const filtered = invoices.filter(invoice => {
      // console.log(invoice)
      return invoice.status?.toLowerCase() == event.target.value.toLowerCase()
    })
    // invoices = filteredInvoices;
    console.log(filtered);
    setFilteredInvoices(filtered)
  }
  
  return (
    <div className="invoice-list-container">
   
      <h2>
        {props.account && props.account.accountname}
        <Link to={accountEditLink} className="btn btn-sm edit-account-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
      </h2>


      <p>There are {props.account && props.account.invoices.length} total Invoices</p>
      
      <Link to={accountlLink} className="btn btn-dark new-invoice-btn"><i className="fa fa-plus plus-btn" aria-hidden="true"></i>New Invoice</Link>

      <form >
        <input onChange={handleChange} type="text"  />
      </form>

      <div className="table-responsive invoice-list">
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
            {filteredInvoices && filteredInvoices.map(invoice => {
              
              let invoicePath = `/accounts/${invoice.account.id}/invoices/${invoice.id}`;
              
              return (
                <tr key={invoice.id}>
                  <td>{invoice.random_code + invoice.id}</td>
                  <td><Moment format="LL">{invoice.payment_due}</Moment></td>
                  <td>{invoice.client_name}</td>
                  <td>${invoice.invoice_total}</td>
                  <td 
                    className={invoice.status === "paid" ? "paid status" : invoice.status === "draft" ? "draft status" : "not-paid status" }
                  >
                    {invoice.status}
                  </td>
                  <td><Link to={invoicePath} className="view-btn"><i class="fa fa-eye" aria-hidden="true"></i></Link></td>              
                </tr>
              )
            })}
          </tbody>
        </table>  
      </div>
    </div>
    
  )
}

export default InvoiceList;