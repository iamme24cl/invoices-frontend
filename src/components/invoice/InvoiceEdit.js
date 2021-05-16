import  React from 'react'
import {connect} from 'react-redux'
import { editInvoice } from '../../actions/editInvoice';

class InvoiceEdit extends React.Component {

  constructor(props) {
    super(props);

    let invoice = this.props.invoicers && this.props.invoices.find(invoice => invoice.id == this.props.match.params.id)

    if (invoice) {
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
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
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
    debugger
    let account = this.props.invoices.find(invoice => invoice.id == this.props.match.params.account_id)
    event.preventDefault();
    this.props.editInvoice(this.state, account.id)
    // this.setState({
    //   description: "",
    //   payment_due: "",
    //   payment_terms: "",
    //   status: "",
    //   client_name: "",
    //   client_email: "",
    //   client_address: "",
    //   items_attributes: [
    //     {
    //       name: "",
    //       price: "",
    //       quantity: ""
    //     }
    //   ]
    // })
    // event.target.reset()
    this.props.history.push(`/accounts/${this.props.account.id}`)
  }

  addItem = event => {
    event.preventDefault();
    this.setState((prevState) => ({
      items_attributes: [...prevState.items_attributes, {name: "", price: "", quantity: ""}]
    }))
  }

  deleteItem = (index) => {
    this.setState({
      items_attributes: this.state.items_attributes.filter((item, itemIndex) => index !== itemIndex)
    })
  }

  

  render() {
    let items = this.state.items_attributes;

    return (
      <div className="modal-container" id="modal">
        <div className="form-modal">
          {/* <button className="close-btn" id="close">
            <i className="fa fa-times"></i>
          </button> */}

          <div className="form-header">
            <h4>New Invoice</h4>
          </div>
        
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Description</label>
              <input 
                type="text" 
                value={this.state.description} 
                onChange={this.handleChange} 
                name="description" 
                className="form-control" 
              />
            </div>
            
             <div className="form-group">
              <label>Due Date</label>
              <input 
                type="date" 
                value={this.state.payment_due} 
                onChange={this.handleChange} 
                name="payment_due" 
                className="form-control" 
              />
            </div>
            
            <div className="row">
              <div className="form-group col-sm-3">
                <label>Payment Terms</label><br />
                <select 
                  name="payment_terms" 
                  onChange={this.handleChange} 
                  value={this.state.payment_terms}
                  className="form-control"
                >
                  <option>Select</option>
                  <option>1</option>
                  <option>15</option>
                  <option>30</option>
                </select>
              </div>
              <div className=" form-group col-sm-3">
                <label>Status</label><br />
                <select 
                  name="status"
                  value={this.state.status}  
                  onChange={this.handleChange} 
                  className="form-control"
                >
                  <option>Select</option>
                  <option>draft</option>
                  <option>pending</option>
                  <option>paid</option>
                </select>
              </div>                        
            </div>

            <div className="form-group">
              <label>Client Name</label>
              <input 
                type="text" 
                value={this.state.client_name} 
                onChange={this.handleChange} 
                name="client_name" 
                className="form-control" 
              />
            </div>
           
            <div className="form-group">
              <label>Client Email</label>
              <input 
                type="email" 
                value={this.state.client_email} 
                onChange={this.handleChange} 
                name="client_email" 
                className="form-control" 
              />
            </div>

            <div className="form-group">
              <label>Client Address</label>
              <input 
                type="text" 
                value={this.state.client_address} 
                onChange={this.handleChange} 
                name="client_address" 
                className="form-control" 
              />
            </div>
            
           <div className="form-group">
            <h3 className="items-div" >Items</h3>
              {
                items.map((val, idx) => {
                  return (
                    <div className="row">
                      <div className="col-sm-4">
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
                      <div className="col-sm-2">
                        {idx === 0 ? (
                          <button className="btn btn-success add-btn" onClick={this.addItem}>
                          <i class="fa fa-plus-circle" aria-hidden="true"></i>
                        </button>
                        ) : (
                          <button className="btn btn-danger minus-btn" onClick={() => this.deleteItem(idx)}>
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                        )}
                        
                      </div>                     
                    </div>               
                  )
                })
              }
              <input className="cta-btn btn btn-dark submit-btn" type="submit" />     
           </div>                 
          </form>
        </div>
      </div>
    )
  }
}

InvoiceEdit.defaultProps = {
  accounts: {}
}

export default connect(null, {editInvoice})(InvoiceEdit)