import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import InvoiceInput from '../components/InvoiceInput'
import Invoices from '../components/Invoices'

class InvoicesContainer extends React.Component {

  render() {
    return (
      <div>
        <InvoiceInput account={this.props.account} />
        <Invoices invoices={this.props.account && this.props.account.invoices} />
      </div>
    )
  }
  
}

export default InvoicesContainer
