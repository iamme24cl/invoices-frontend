import React from 'react'

const Header = (props) => {

  const handleClick = () => {
    document.body.classList.toggle('show-nav');
  }

  return (
    <header>
      <button id="toggle" className="toggle" onClick={handleClick}>
        <i className="fa fa-bars fa-2x"></i>
      </button>

      <h1>Invoices</h1>   
    </header>
  )
}

export default Header