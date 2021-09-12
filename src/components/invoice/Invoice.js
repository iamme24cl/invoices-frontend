import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteInvoice} from '../../actions/deleteInvoice'
import Moment from 'react-moment'
import html2pdf from 'html2pdf.js'
import './Invoice.css'

class Invoice  extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
  }

  handleDelete(invoice) {
    // debugger
    this.props.deleteInvoice(invoice.id, invoice.account.id)
    this.props.history.push(`/accounts/${invoice.account.id}/invoices`)
  }

  generatePDF() {
    const element = document.getElementById('invoice');
    html2pdf().from(element).save();
  }
 

  render () {
    let invoice = this.props.invoices && this.props.invoices.find(invoice => invoice.id == this.props.match.params.id)
    let address = invoice.account.address.split(", ")
    let clientAddress = invoice.client_address.split(", ")
    let invoiceEditLink = `/accounts/${invoice.account.id}/invoices/${invoice.id}/edit`
    console.log(this.props);

    return (
      <div>
        <div className="col-md-12">
            <div id="invoice" className="invoice">
              {/* <!-- begin invoice-company --> */}
              <div className="invoice-company text-inverse f-w-600">
                  <span className="pull-right hidden-print">
                  <Link to={invoiceEditLink} className="btn btn-sm btn-white m-b-10 p-l-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>
                  <button onClick={() => this.handleDelete(invoice)} className="btn btn-sm btn-white m-b-10 p-l-5"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                  <button onClick={this.generatePDF} className="btn btn-sm btn-white m-b-10 p-l-5"><i className="fa fa-file t-plus-1 text-danger fa-fw fa-lg"></i> Export as PDF</button>
                  <button onClick={() => window.print()} className="btn btn-sm btn-white m-b-10 p-l-5"><i className="fa fa-print t-plus-1 fa-fw fa-lg"></i> Print</button>
                  </span>
                  {invoice.account.accountname}, Inc
              </div>
              {/* <!-- end invoice-company --> */}
              {/* <!-- begin invoice-header --> */}
              <div className="invoice-header">
                  <div className="invoice-from">
                    <small>from</small>
                    <div className="m-t-5 m-b-5">
                        <strong className="text-inverse">{invoice.account.accountname}, Inc.</strong><br />
                        {address[0]}<br />
                        {address[1]}, {address[2]}<br />
                        {address[3]}<br />
                        {/* Email: */}
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
                        {invoice.description}
                    </div>
                  </div>
              </div>
              {/* <!-- end invoice-header --> */}
              {/* <!-- begin invoice-content --> */}
              <div className="invoice-content">
                  {/* <!-- begin table-responsive --> */}
                  <div className="table-responsive">
                    <table className="table table-invoice">
                        <thead>
                          <tr>
                              <th>ITEM DESCRIPTION</th>
                              <th className="text-center" width="10%">PRICE</th>
                              <th className="text-center" width="10%">QUANTIY</th>
                              <th className="text-right" width="20%">LINE TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoice.items.map(item => {
                            return (
                              <tr>
                                <td>
                                  <span className="text-inverse">{item.name}</span><br />
                                  {/* <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis arcu.</small> */}
                                </td>
                                <td className="text-center">${item.price}</td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-right">${item.total}</td>
                            </tr>
                            )
                          })}                        
                        </tbody>
                    </table>
                  </div>
                  {/* <!-- end table-responsive --> */}
                  {/* <!-- begin invoice-price --> */}
                  <div className="invoice-price">
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
                  * Make all cheques payable to {invoice.account.accountname}<br />
                  * Payment is due within 30 days<br />
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
        </div>
      </div>
    )
  }

  
}

export default connect(null, {deleteInvoice})(Invoice)