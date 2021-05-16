import  React from 'react'
import {connect} from 'react-redux'
import { editInvoice } from '../../actions/editInvoice';

class InvoiceEdit extends React.Component {

  constructor(props) {
    super(props);

    let invoice = this.props.invoices && this.props.invoices.find(invoice => invoice.id == this.props.match.params.id)

    console.log(invoice)

    if (invoice) {
      this.state = {
        description: invoice.description,
        payment_due: invoice.payment_due,
        payment_terms: invoice.payment_terms,
        status: invoice.status,
        client_name: invoice.client_name,
        client_email: invoice.client_email,
        client_address: invoice.client_address
      }
    } else {
      this.state = {
        description: "",
        payment_due: "",
        payment_terms: "",
        status: "",
        client_name: "",
        client_email: "",
        client_address: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
    
   handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    // debugger
    let invoice = this.props.invoices.find(invoice => invoice.id == this.props.match.params.id)
    event.preventDefault();
    this.props.editInvoice(this.state, invoice.account.id,  invoice.id)

    this.props.history.push(`/accounts/${invoice.account.id}`)
  }

  render() {

    return (
      <div className="modal-container" id="modal">
        <div className="form-modal">
         
          <div className="form-header">
            <h4>Edit Invoice</h4>
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