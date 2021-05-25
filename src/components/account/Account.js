import React from 'react'
import InvoicesContainer from '../../containers/InvoicesContainer'

const Account = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

  return (
    <div>
      <InvoicesContainer account={account ? account: null}/>
    </div>
  )
}

export default Account;