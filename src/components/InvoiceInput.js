import  React from 'react'
import {connect} from 'react-redux'

class InvoiceInput extends React.Component {

  state = {
    payment_due: '',
    description: '',
    payment_terms: '',
    status: '',
    client_name: '',
    client_email: '',
    client_address: '',
    invoice_total: '',
    items: [
      {
        name: '',
        quantity: '',
        price: '',
        total: ''
      }

    ]
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form className="form-group">
          <label>Due Date</label>
          <input type="date" value={this.state.payment_due} name="payment_due" onChange={this.handleChange} className="form-control" />
          <label>Description</label>
          <input type="text" value={this.state.description} name="description" onChange={this.handleChange} className="form-control" />
          <label>Payment Terms</label><br />
          <select name="payment_terms" onChange={this.handleChange} className="">
            <option>Select</option>
            <option value="1">1</option>
            <option value="15">15</option>
            <option value="30">30</option>
          </select><br />
          <label>Status</label><br />
          <select name="status" onChange={this.handleChange} className="">
            <option>Select</option>
            <option value="draft">draft</option>
            <option value="pending">pending</option>
            <option value="paid">paid</option>
          </select><br />
          <label>Client Name</label>
          <input type="text" value={this.state.client_name} name="client_name" onChange={this.handleChange} className="form-control" />
          <label>Client Email</label>
          <input type="email" value={this.state.client_email} name="client_email" onChange={this.handleChange} className="form-control" />
          <label>Client Address</label>
          <input type="text" value={this.state.client_address} name="client_address" onChange={this.handleChange} className="form-control" />
        </form>
      </div>
    )
  }
}

export default connect(null)(InvoiceInput)