import React, { useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Invoice = (props) => {
  const { invoice } = props;
  const [showInvoiceInfo, setShowInvoiceInfo] = useState(false);

  const toggleInfo = () => {
    setShowInvoiceInfo(!showInvoiceInfo);
  };

  

  return (
    <div className='border border-gray-300 p-3 mb-3 rounded-md shadow-lg' key={invoice.id}>
      <div className='flex justify-between'>
        <h5 className="font-bold">{invoice.client_name}</h5>
        <button onClick={toggleInfo}><i className={`${showInvoiceInfo ? "fa fa-minus" : "fa fa-plus"}`}></i></button>
      </div>

      {showInvoiceInfo && 
      <>
        <ul className="text-gray-700 text-sm mt-5">
          <li className="bg-gray-100 border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-id`}><span className="mr-5 font-bold">Invoice#:</span> {invoice.id}{invoice.random_code}</li>
          <li className="bg-gray-100 border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-description`}><span className="mr-5 font-bold">Description:</span> {invoice.description}</li>
          <li className="bg-gray-100 border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-email`}><span className="mr-5 font-bold">Client Email:</span> {invoice.client_email}</li>
          <li className="bg-gray-100 border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-total`}><span className="mr-5 font-bold">Invoice Total:</span> ${invoice.invoice_total}</li>
          <Link to={`/invoices/${invoice.id}/edit`}><li className="bg-gray-100 hover:bg-gray-300 cursor-pointer border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-status`}>
            <span className="mr-5 font-bold">Status:</span> 
            <span className={`${invoice.status === "paid" ? "text-green-700" : invoice.status === "draft" ? "text-yellow-600" : "text-red-700"}`}>
              {invoice.status.toUpperCase()}
            </span>
          </li></Link>
          <li className="bg-gray-100 border border-gray-300 mb-1 px-2 py-1 rounded" key={`${invoice.id}-due`}><span className="mr-5 font-bold">Due Date:</span> <Moment format="LL">{invoice.payment_due}</Moment></li>
        </ul>
        <div className="hidden sm:flex justify-end mt-3">
          <Link className="text-sm text-blue-600 hover:text-blue-900" to={`/invoices/${invoice.id}`}>View Details</Link>
        </div>
      </>
      }

    </div>
  )
}

export default Invoice;