import React from 'react';

const Header = () => {

  const handleClick = () => {
    document.body.classList.toggle('show-nav');
    // console.log(document.body.classList);
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

export default Header;