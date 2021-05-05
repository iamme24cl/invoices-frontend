import './App.css';
import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/accounts/1/invoices')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  handleOnClick = () => {
    const data = {
      payment_due: "2021-08-19",
      description: "Re-branding",
      payment_terms: 1,
      status: "pending",
      client_name: "Jensen Huang",
      client_email: "jensenh@mail.com",
      client_address: "106 Kendell Street, Sharrington, NR24 5WQ, United Kingdom",
      items_attributes: [
        {
          name: "Brand Guidelines",
          price: 200.00,         
          quantity: 2
        }, 
        {
          name: "New Guidelines",
          price: 200.00,         
          quantity: 3
        }
      ]
    }
    fetch('http://localhost:3000/api/v1/accounts/1/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),      
    })
    .then(response => response.json())
    .then(dataObj => {
      console.log('Success:', dataObj)
    })
    .catch((error) => {
      console.log('Error:', error);
    });     

  }

  handleUpdate = () => {
    const UpdateData = {
      payment_due: "2021-08-19",
      description: "New Brand",
      payment_terms: 1,
      status: "Paid",
      client_name: "Jensen Huang",
      client_email: "jensenh@mail.com",
      client_address: "106 Kendell Street, Sharrington, NR24 5WQ, United Kingdom",
      items_attributes: [
        {
          name: "Brand Guidelines",
          price: 2000.00,         
          quantity: 2
        }
      ]
    }

    fetch('http://localhost:3000/api/v1/accounts/1/invoices/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UpdateData),      
    })
    .then(response => response.json())
    .then(dataObj => {
      console.log('Success:', dataObj)
    })
    .catch((error) => {
      console.log('Error:', error);
    });     

  }

  handleDelete = () => {
    fetch('http://localhost:3000/api/v1/accounts/1/invoices/2', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: null
    })
    .then(response => response.json())
    .then(data => alert(data.message));
  }



  render () {
    return (
      <div className="App">
       App
       <button onClick={this.handleOnClick}>Post Data</button>
       <button onClick={this.handleDelete}>Delete Data</button>
       <button onClick={this.handleUpdate}>Update Data</button>
      </div>
    );
  }
}

export default App;
