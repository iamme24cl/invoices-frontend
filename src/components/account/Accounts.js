import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Account from './Account'

const Accounts = (props) => {
  return (
    <div>
      {props.accounts.map(account => {
        return (
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.accountname}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Accounts;