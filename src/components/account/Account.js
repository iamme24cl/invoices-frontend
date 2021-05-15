import React from 'react'
import {Link} from 'react-router-dom'
import InvoicesContainer from '../../containers/InvoicesContainer'




const Account = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
  let accountlLink =  account ? `/accounts/${account.id}/invoices/new` : null
 

  return (
    <div>
      
      <h1>{account ? account.accountname: null}</h1>
        <p>{account ? account.address: null}</p>
        <p>There are {account ? account.invoices.length : null } total invoices</p>

        <Link to={accountlLink} className="btn btn-primary new-invoice-btn"><i className="fa fa-plus plus-btn" aria-hidden="true"></i>New Invoice</Link>

      
   
      <InvoicesContainer account={account ? account: null}/>
    </div>
  )
}

export default Account