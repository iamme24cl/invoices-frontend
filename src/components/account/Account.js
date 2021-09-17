import React from 'react';
import { Link } from 'react-router-dom'
import InvoicesContainer from '../../containers/InvoicesContainer'

const Account = (props) => {
  let accountEditLink = props.account ? `/accounts/${props.account.id}/edit` : null
  return (
    <div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-5">
            <h2>
              {props.account && props.account.accountname}
              <Link 
                to={accountEditLink} 
                className="btn btn-sm edit-account-btn"
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
              </Link>
            </h2>
          </div>
        </div>
      </div>
      
      <InvoicesContainer account={props.account}/>
    </div>
  )
}

export default Account;