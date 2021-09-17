import React from 'react';
import { Link } from 'react-router-dom'
import InvoicesContainer from '../../containers/InvoicesContainer'

const Account = (props) => {
  let accountEditLink = props.account ? `/accounts/${props.account.id}/edit` : null
  return (
    <div className="container">
       <h2>
        {props.account && props.account.accountname}
        <Link 
          to={accountEditLink} 
          className="btn btn-sm edit-account-btn"
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
        </Link>
      </h2>
      
      <InvoicesContainer account={props.account}/>
    </div>
  )
}

export default Account;