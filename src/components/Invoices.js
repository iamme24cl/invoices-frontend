import React from 'react'

const Invoices = (props) => {
  // console.log(props.invoices)
  return (
    <div>
      {props.invoices && props.invoices.map(invoice => {
        return (
          <li key={invoice.id}>{invoice.client_name} - STATUS: {invoice.status} --- Invoice Total: ${invoice.total}</li>
        )
      })}
    </div>
  )
}

export default Invoices