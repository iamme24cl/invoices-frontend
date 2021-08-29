import React from 'react' 
import {Link} from 'react-router-dom'
import './Accounts.css'

const Accounts = (props) => {
  if (props.accounts.length === 0) {
    return (
      <h3>Loading Accounts....</h3>
    );
  }
  return (
    <div>
      {props.accounts.map(account => {
        return (
          <div className="accounts-container" key={account.id}>
            <Link to={`/accounts/${account.id}`}  className="account-link">{account.accountname}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Accounts;