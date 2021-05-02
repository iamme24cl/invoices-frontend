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










