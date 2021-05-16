import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import InvoiceInput from '../components/invoice/InvoiceInput'
import Invoices from '../components/invoice/Invoices'
import Invoice from '../components/invoice/Invoice'

class InvoicesContainer extends React.Component {

  render() {
    

    return (
      <div>
        <Switch>
          <Route path='/accounts/:id/invoices/new' render={(routerProps) =>  <InvoiceInput {...routerProps} account={this.props.account} /> } />  

          <Route path='/accounts/:account_id/invoices/:id' render={(routerProps) =>  <Invoice {...routerProps} invoices={this.props.account && this.props.account.invoices} />  } />
          
          <Route path='/accounts/:id' render={() =>  <Invoices account={this.props.account} invoices={this.props.account && this.props.account.invoices} />  } /> 
        </Switch>     
      </div>
    )
  }
  
}

export default InvoicesContainer
