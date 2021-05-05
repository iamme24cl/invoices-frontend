## table accounts
// has_many invoices

username: t.string
password: t.string
address: t.string

## table invoices
// belongs_to account
// has_many items

payment_due: t.datetime
description: t.string
payment_terms: t.integer
status: t.string => options: [draft, pending, paid], default value = draft

client_name: t.string
client_email: t.string
client_address: t.string


total: t.float => (sum of the totals of all the items)


## table items
// belongs_to invoice

name: t.string
quantity: t.integer
price: t.float
total: t.float (self.price * self.quantity)

## Sample JSON Data

{
  "id": "RT3080",
  "createdAt": "2021-08-18",
  "paymentDue": "2021-08-19",
  "description": "Re-branding",
  "paymentTerms": 1,
  "client_name": "Jensen Huang",
  "client_email": "jensenh@mail.com",
  "status": "paid",
  "sender_address":  "19 Union Terrace, London, E1 3EZ, United Kingdom",
  "client_address": "106 Kendell Street, Sharrington, NR24 5WQ, United Kingdom",

  "items": [
    {
      "name": "Brand Guidelines",
      "quantity": 1,
      "price": 1800.90,
      "total": 1800.90
    }
  ],

  "total": 1800.90
}


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
    status: "paid",
    client_name: "Jensen Huang",
    client_email: "jensenh@mail.com",
    client_address: "106 Kendell Street, Sharrington, NR24 5WQ, United Kingdom",
    items_attributes: [
      {
        name: "Brand Guidelines",
        price: 1000.00,         
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
  fetch('http://localhost:3000/api/v1/accounts/1/invoices/1', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
  })
  .then(response => response.json())
  .then(data => alert(data.message));
}


<button onClick={this.handleOnClick}>Post Data</button>
<button onClick={this.handleDelete}>Delete Data</button>
<button onClick={this.handleUpdate}>Update Data</button>
