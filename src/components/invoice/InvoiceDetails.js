import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import html2pdf from 'html2pdf.js';
import { fetchInvoices, destroyInvoice } from '../../store/utils/thunkCreators';
import { Item } from "../item";

import './InvoiceDetails.css';

const InvoiceDetails = (props) => {
  const { account, invoices, fetchInvoices, destroyInvoice, history } = props;
  
  useEffect(() => {
    fetchInvoices(account.id);
  }, [fetchInvoices, account.id]);

  const invoice = invoices.find(invoice => invoice.id.toString() === props.match.params.id);
  const address = invoice && invoice.account.address.split(", ");
  const clientAddress = invoice && invoice.client_address.split(", ");

  const handleDelete = async () => {
    await destroyInvoice(account.id, invoice.id);
    history.push("/")
  };

  const generatePDF = () => {
    const element = document.getElementById('invoice');
    html2pdf().from(element).save();
  };
 
  return (
    <div style={{minHeight: "90vh"}} className="flex justify-center">
      {invoice && <div className="container mt-6 sm:mt-20 w-full">
        <div className="flex justify-evenly text-black border border-gray-400 py-2 rounded-md mx-1 bg-gray-200 no-print">
          <Link to={`/invoices/${invoice.id}/edit`} className="hover:bg-gray-300 p-1 rounded-md"><i className="fa fa-pencil-square-o text-gray-700" aria-hidden="true"></i> Edit</Link>
          <button onClick={() => handleDelete(invoice)} className="hover:bg-gray-300 p-1 sm:px-3 rounded-md"><i className="fa fa-trash-o text-gray-700" aria-hidden="true"></i> Delete</button>
          <button onClick={generatePDF} className="hover:bg-gray-300 p-1 rounded-md"><i className="fa fa-file t-plus-1 text-danger fa-fw fa-lg text-gray-700"></i> Export as PDF</button>
          <button onClick={() => window.print()} className="hover:bg-gray-300 p-1 rounded-md"><i className="fa fa-print t-plus-1 fa-fw fa-lg text-gray-700"></i> Print</button>
        </div>
        <h4 className='text-center text-lg font-bold mt-8'>{invoice.account.accountname}, Inc</h4>
        <div className="p-6 sm:hidden">
          
        </div>
        <div id="invoice" className="p-6 ">
          <div className="invoice-header">
            <div className="invoice-from">
              <small>from</small>
              <div className="m-t-5 m-b-5">
                  <strong className="text-inverse">{invoice.account.accountname}, Inc.</strong><br />
                  {address[0]}<br />
                  {address[1]}, {address[2]}<br />
                  {address[3]}<br />
              </div>
            </div>
            <div className="invoice-to">
              <small>to</small>
              <address className="m-t-5 m-b-5">
                  <strong className="text-inverse">{invoice.client_name}</strong><br />
                  {clientAddress[0]}<br />
                  {clientAddress[1]}, {clientAddress[2]}<br />
                  {clientAddress[3]}<br />
                  Email: {invoice.client_email}
              </address>
            </div>
              <div className="invoice-date">
                <small>Invoice</small>
                <div className="date text-inverse m-t-5"><Moment format="LL">{invoice.payment_due}</Moment></div>
                <div className="invoice-detail">
                    #{invoice.random_code + invoice.id}<br />
                    {invoice.description}<br />
                    <span>
                      <span className="mr-5 font-bold">Status:</span> 
                      <span className={`${invoice.status === "paid" ? "text-green-700" : invoice.status === "draft" ? "text-yellow-600" : "text-red-700"}`}>
                        {invoice.status.toUpperCase()}
                      </span>
                    </span>
                </div>
              </div>
          </div>
          {/* <!-- end invoice-header --> */}

          {/* <!-- begin invoice-content --> */}
          <div className="invoice-content mt-10">
            {/* <!-- begin table-responsive --> */}
            <div className="table-responsive">
              <table className="table table-invoice">
                <thead>
                  <tr>
                    <th className="text-center">ITEM DESCRIPTION</th>
                    <th className="text-center" width="10%">PRICE</th>
                    <th className="text-center" width="10%">QUANTIY</th>
                    <th className="text-right" width="20%">LINE TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item, idx) => {
                    return (
                          <Item idx={idx} item={item}/>
                        )
                      })}                        
                </tbody>
              </table>
            </div>
            {/* <!-- end table-responsive --> */}

            {/* <!-- begin invoice-price --> */}
            <div className="invoice-price mt-5">
              <div className="invoice-price-left">
                  {/* <div className="invoice-price-row"> */}
                    {/* <div className="sub-price">
                        <small>SUBTOTAL</small>
                        <span className="text-inverse">$4,500.00</span>
                    </div> */}
                    {/* <div className="sub-price">
                        <i className="fa fa-plus text-muted"></i>
                    </div>
                    <div className="sub-price">
                        <small>FEE (%)</small>
                        <span className="text-inverse">$108.00</span>
                    </div> */}
                  {/* </div> */}
              </div>
              
              <div className="invoice-price-right">
                  <small>TOTAL</small> <span className="f-w-600">${invoice.invoice_total}</span>
              </div>
            </div>
            {/* <!-- end invoice-price --> */}
          </div>
          {/* <!-- end invoice-content --> */}

          {/* <!-- begin invoice-note --> */}
          <div className="invoice-note">
              * Make all cheques payable to <span className="font-bold text-black">{invoice.account.accountname}</span><br />
              * Payment is due within 30 days<br />
              * If you have any questions about the invoice please email <span className="font-bold text-black">{invoice.account.email}</span>
          </div>
          {/* <!-- end invoice-note --> */}

          {/* <!-- begin invoice-footer --> */}
          <div className="invoice-footer">
              <p className="text-center m-b-5 f-w-600">
                THANK YOU FOR YOUR BUSINESS
              </p>
          </div>
          {/* <!-- end invoice-footer --> */}
        </div>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    account: state.account,
    invoices: state.invoices
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: (accountId) => {
      dispatch(fetchInvoices(accountId));
    },
    destroyInvoice: (accountId, id) => {
      dispatch(destroyInvoice(accountId, id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetails)