import React from 'react'


const Account = (props) => {
  // console.log(props.account.invoices)
  return (
    <li>
      <h2>{props.account.accountname}</h2>
      <p>{props.account.address}</p>
    </li>
  )
}

export default Account