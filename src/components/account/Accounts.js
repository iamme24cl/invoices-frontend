import React from 'react' 
import {Link} from 'react-router-dom'

const Accounts = (props) => {
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