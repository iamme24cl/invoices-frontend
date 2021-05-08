import React from 'react' 

const Accounts = ({accounts}) => {
  // console.log(accounts)
  return (
    <div>
      {accounts.map(account => {
        return (
          <li key={account.id}>
            <h3>{account.accountname}</h3>
            <p>{account.address}</p>
          </li>
          
        )
      })}
    </div>
  )
}

export default Accounts;