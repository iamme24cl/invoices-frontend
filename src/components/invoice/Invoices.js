import React, { useState } from 'react';
import { Invoice } from './index';

const Invoices = (props) => {
  const { invoices } = props;
  const [searchString, setSearchString] = useState("");

  let filteredInvoices = !searchString
    ? invoices
    : invoices.filter(invoice => {
      return (
        invoice.description.toLowerCase().includes(searchString.toLowerCase()) ||
        invoice.client_name.toLowerCase().includes(searchString.toLowerCase())
      );
    })
  
  return (
    <>
      <div className="p-1 mb-3 border border-gray-300 rounded-md shadow-lg">
        <input 
          className="appearance-none  border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none" 
          placeholder="Search"
          value={searchString} 
          onChange={e => setSearchString(e.target.value)} 
        />
      </div>
      {filteredInvoices.map(invoice => {
          return (
            <Invoice invoice={invoice} key={invoice.id} />
          )
        })}
    </>
  )

  
}

export default Invoices;