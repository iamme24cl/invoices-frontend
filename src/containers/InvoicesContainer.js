import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Link} from 'react-router-dom'
import InvoiceInput from '../components/invoice/InvoiceInput'
import Invoices from '../components/invoice/Invoices'
import Invoice from '../components/invoice/Invoice'

class InvoicesContainer extends React.Component {

  render() {
    let accountlLink =  this.props.account ? `/accounts/${this.props.account.id}/invoices/new` : null

    return (
      <div>
        <Link to={accountlLink} className="btn btn-dark new-invoice-btn"><i className="fa fa-plus plus-btn" aria-hidden="true"></i>New Invoice</Link>
        <Switch>
          <Route path='/accounts/:id/invoices/new' render={(routerProps) =>  <InvoiceInput {...routerProps} account={this.props.account} /> } />  

          <Route path='/accounts/:account_id/invoices/:id' render={() =>  <Invoice />  } />
          
          <Route path='/accounts/:id' render={() =>  <Invoices  invoices={this.props.account && this.props.account.invoices} />  } /> 
        </Switch>     
      </div>
    )
  }
  
}

export default InvoicesContainer
