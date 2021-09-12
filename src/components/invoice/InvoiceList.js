import React, { useState } from 'react';
import {Link, useHistory } from 'react-router-dom'
import Moment from 'react-moment';
import './InvoiceList.css'


const InvoiceList = (props) => {
  let newInvoiceLink =  props.account ? `/accounts/${props.account.id}/invoices/new` : null
  
  const invoices = props.invoices;
  
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (path) => {
    history.push(path)
  }

  let filteredInvoices = !searchTerm
    ? invoices
    : invoices.filter(invoice => {
      return (
        invoice.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        invoice.client_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  
  return (
    <div className="invoice-list-container">
      <Link 
        to={newInvoiceLink} 
        className="btn btn-dark new-invoice-btn"
      >
        <i className="fa fa-plus plus-btn" aria-hidden="true"></i>
        New Invoice
      </Link>

      <div>
        <label style={{fontWeight: 'bold'}}>Filter Invoices ➜</label>
      
        <input
          type="text"
          placeholder="Description Or Client Name"
          value={searchTerm}
          onChange={handleChange}
          className="invoice-search-bar"
        />
      </div>
      
      <div className="table-responsive invoice-list">
        <table className="table table-hover invoice-table">
          <thead>
            <tr>
              <th>Invoice Id #</th>
              <th>Description</th>
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
                <tr onClick={() => handleClick(invoicePath)} key={invoice.id}>
                  <td>{invoice.random_code + invoice.id}</td>
                  <td>{invoice.description}</td>
                  <td><Moment format="LL">{invoice.payment_due}</Moment></td>
                  <td>{invoice.client_name}</td>
                  <td>${invoice.invoice_total}</td>
                  <td 
                    className={invoice.status === "paid" 
                      ? "paid status" 
                      : invoice.status === "draft" 
                      ? "draft status" 
                      : "not-paid status" }
                  >
                    {invoice.status}
                  </td>       
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