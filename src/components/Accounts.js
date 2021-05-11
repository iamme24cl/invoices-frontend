import React from 'react' 
import Account from './Account'

const Accounts = ({accounts}) => {
  // console.log(accounts)
  return (
    <div>
      {accounts.map(account => {
        return (
          <div key={account.id}>
            <Account account={account}/>
          </div>
        )
      })}
    </div>
  )
}

export default Accounts;