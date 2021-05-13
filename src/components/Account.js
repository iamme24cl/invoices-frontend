import React from 'react'
import {Redirect} from 'react-router-dom'
import InvoicesContainer from '../containers/InvoicesContainer'


const Account = (props) => {
  // console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
  
  return (
    <div>
      <h1>{account ? account.accountname: null}</h1>
      <p>{account ? account.address: null}</p>
      <InvoicesContainer account={account}/>
    </div>
  )
}

export default Account