import React from 'react'
import InvoicesContainer from '../../containers/InvoicesContainer'




const Account = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

  return (
    <div>
      
      <h2>{account ? account.accountname: null}</h2>
      <p>{account ? account.address: null}</p>
      <p>There are {account ? account.invoices.length : null } total invoices</p>
    
      <InvoicesContainer account={account ? account: null}/>
    </div>
  )
}

export default Account