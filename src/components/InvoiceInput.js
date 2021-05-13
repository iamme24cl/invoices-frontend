import  React from 'react'
import {connect} from 'react-redux'
import { addInvoice } from '../actions/addInvoice';

class InvoiceInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: "",
      payment_due: "",
      payment_terms: "",
      status: "",
      client_name: "",
      client_email: "",
      client_address: "",
      items_attributes: [
        {
          name: "",
          price: "",
          quantity: ""
        }
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    if(["name", "price", "quantity"].includes(event.target.name)) {
      let items_attributes = [...this.state.items_attributes]
      items_attributes[event.target.dataset.id][event.target.name] = event.target.value
      this.setState({items_attributes}/*, () => console.log(this.state.items_attributes)*/)
    } else {
      this.setState({ 
        [event.target.name]: event.target.value
      })
    }
  }

  handleSubmit = (event) => {
    // debugger
    event.preventDefault();
    this.props.addInvoice(this.state, this.props.account.id)
    this.setState({
      description: "",
      payment_due: "",
      payment_terms: "",
      status: "",
      client_name: "",
      client_email: "",
      client_address: "",
      items_attributes: [
        {
          name: "",
          price: "",
          quantity: ""
        }
      ]
    })
    event.target.reset()
  }

  addItem = (event) => {
    event.preventDefault()
    this.setState((prevState) => ({
      items_attributes: [...prevState.items_attributes, {name: "", price: "", quantity: ""}]
    }))
  }

  

  render() {
    let items = this.state.items_attributes;

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

          <h3>Items</h3>
          {
            items.map((val, idx) => {
              return (
                <div className="row">
                  <div className="col-sm-6">
                    <label>Item Name</label>
                    <input
                      type="text"
                      name="name"
                      data-id={idx}
                      value={this.state.items_attributes.name} 
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-3">
                    <label>Item Price</label>
                    <input
                      type="text" 
                      name="price"
                      data-id={idx}
                      value={this.state.items_attributes.price}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-3">
                    <label>Item Quantity</label>
                    <input 
                    type="number" 
                    name="quantity"
                    data-id={idx}
                    value={this.state.items_attributes.quantity}
                    onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>                     
                </div>               
              )
            })
          }
          <button onClick={this.addItem}>Add Item</button>
          <br /><br />
          <input type="submit" />          
        </form>
      </div>
    )
  }
}

export default connect(null, {addInvoice})(InvoiceInput)