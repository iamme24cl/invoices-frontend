import React from 'react' 
import {Route, Link} from 'react-router-dom'
import Account from './Account'

const Accounts = ({accounts}) => {
  return (
    <div>
      {accounts.map(account => {
        return (
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Accounts;