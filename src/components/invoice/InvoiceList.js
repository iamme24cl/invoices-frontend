import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Moment from 'react-moment';
import { fetchInvoices } from '../../store/utils/thunkCreators';


const InvoiceList = (props) => {
  const { account, invoices, fetchInvoices } = props;
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInvoices(account.id);
  }, [fetchInvoices])

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
    <div className="invoice-list-container container p-5">
      <div className="row align-items-center mb-2">
        <div className="col-sm mb-3">
          <Link to={""} className="btn btn-dark new-invoice-btn">
            New Invoice
          </Link>
        </div>
        <div className="col-sm mb-3 form-group">
          <label>Filter Invoices</label>
          <input
            type="text"
            placeholder="Description Or Client Name"
            value={searchTerm}
            onChange={handleChange}
            className="invoice-search-bar form-control"
          />
        </div>
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
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
    invoices: state.invoices
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: (accountId) => {
      dispatch(fetchInvoices(accountId))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceList);