import React from 'react'
import InvoiceInput from '../components/InvoiceInput'
import Invoices from '../components/Invoices'

class InvoicesContainer extends React.Component {

  render() {
    return (
      <div>
        <InvoiceInput />
        <Invoices invoices={this.props.account && this.props.account.invoices} />
      </div>
    )
  }
  
}

export default InvoicesContainer
