import  React from 'react'
import {connect} from 'react-redux'
import { addInvoice } from '../actions/addInvoice';

class InvoiceInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: "",
      price: "",
      quantity: "",
      payment_due: "",
      payment_terms: "",
      status: "",
      client_name: "",
      client_email: "",
      client_address: ""
    }
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addInvoice(this.state, this.props.account.id)
    this.setState({
      description: "",
      price: "",
      quantity: "",
      payment_due: "",
      payment_terms: "",
      status: "",
      client_name: "",
      client_email: "",
      client_address: ""
    })
  }

  render() {

    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label>Description</label>
          <input 
            type="text" 
            value={this.state.description} 
            onChange={this.handleChange} 
            name="description" 
            className="form-control" 
          />
          <label>Price</label>
          <input type="text" 
            value={this.state.price} 
            onChange={this.handleChange} 
            name="price" 
            className="form-control" 
          />
          <label>Quantity</label>
          <input 
            type="number" 
            value={this.state.quantity} 
            onChange={this.handleChange} 
            name="quantity" 
            className="form-control" 
          />
          <label>Due Date</label>
          <input 
            type="date" 
            value={this.state.payment_due} 
            onChange={this.handleChange} 
            name="payment_due" 
            className="form-control" 
          />
          
          <label>Payment Terms</label><br />
          <select 
            name="payment_terms" 
            onChange={this.handleChange} 
            value={this.state.payment_terms}
            className=""
          >
            <option>Select</option>
            <option>1</option>
            <option>15</option>
            <option>30</option>
          </select><br />

          <label>Status</label><br />
          <select 
            name="status"
            value={this.state.status}  
            onChange={this.handleChange} 
            className=""
          >
            <option>Select</option>
            <option>draft</option>
            <option>pending</option>
            <option>paid</option>
          </select><br />
          
          <label>Client Name</label>
          <input 
            type="text" 
            value={this.state.client_name} 
            onChange={this.handleChange} 
            name="client_name" 
            className="form-control" 
          />
          <label>Client Email</label>
          <input 
            type="email" 
            value={this.state.client_email} 
            onChange={this.handleChange} 
            name="client_email" 
            className="form-control" 
          />
          <label>Client Address</label>
          <input 
            type="text" 
            value={this.state.client_address} 
            onChange={this.handleChange} 
            name="client_address" 
            className="form-control" 
          />
          
          <br /><br />
          <input type="submit" />          
        </form>
      </div>
    )
  }
}

export default connect(null, {addInvoice})(InvoiceInput)