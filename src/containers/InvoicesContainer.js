import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import InvoiceInput from '../components/InvoiceInput'
import Invoices from '../components/Invoices'

class InvoicesContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/accounts/:id/invoices/new' render={(routerProps) =>  <InvoiceInput {...routerProps} account={this.props.account} /> } />
          <Route path='/accounts/:id/invoices' render={(routerProps) =>  <Invoices {...routerProps} invoices={this.props.account && this.props.account.invoices} /> } />
        </Switch>
       
        
      </div>
    )
  }
  
}

export default InvoicesContainer
