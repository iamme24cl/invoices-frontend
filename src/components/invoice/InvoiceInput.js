import  React from 'react'
import {connect} from 'react-redux'
import { postInvoice } from '../../store/utils/thunkCreators';

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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleChange(event) {
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

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.postInvoice(this.state, this.props.account.id)
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
    event.target.reset();
    this.props.history.push("/");
  }

  addItem(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      items_attributes: [...prevState.items_attributes, {name: "", price: "", quantity: ""}]
    }))
  }

  deleteItem(index) {
    this.setState({
      items_attributes: this.state.items_attributes.filter((item, itemIndex) => index !== itemIndex)
    })
  }

  render() {
    let items = this.state.items_attributes;

    return (
        <div className="h-screen flex flex-col mt-10 sm:mt-16 items-center w-11/12">
          <h4 className='mb-6 font-bold text-lg'>New Invoice</h4>
          <form onSubmit={this.handleSubmit} className="w-full ml-5 lg:ml-0 max-w-lg p-1 pb-16">
            <div className="flex flex-wrap -ml-3 -mr-5 lg:-mx-4 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='description'>
                  Description
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="description"
                  name="description"
                  type="text" 
                  placeholder="Invoice description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            
          <div className="flex flex-wrap -ml-3 -mr-5 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="client-name">
                Client Name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="client-name"
                name="client_name" 
                type="text" 
                placeholder="Jane Doe" 
                value={this.state.client_name}
                onChange={this.handleChange}
              />
            </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='client-email'>
                  Client email
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="client-email"
                  name="client_email" 
                  type="text" 
                  placeholder="example@mail.com" 
                  value={this.state.client_email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -ml-3 -mr-5 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='client-address'>
                  Client Address
                </label>
                <textarea
                  rows="4" 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="client-address"
                  name="client_address"
                  placeholder="Street, City, State, Zip Code" 
                  value={this.state.client_address}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -ml-3 -mr-5 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='payment-terms'>
                  Payment Terms
                </label>
                <div className="relative">
                  <select 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="payment-terms"
                    name="payment_terms"
                    value={this.state.payment_terms} 
                    onChange={this.handleChange}
                  >
                    <option value="">Select</option>
                    <option>1</option>
                    <option>15</option>
                    <option>30</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='status'>
                  Status
                </label>
                <div className="relative">
                  <select 
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="status"
                    name="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                  >
                    <option value="">Select</option>
                    <option>draft</option>
                    <option>pending</option>
                    <option>paid</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='payment-due'>
                  Due Date
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="payment-due"
                  name="payment_due" 
                  type="date" 
                  value={this.state.payment_due}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {items.map((val, idx) => {
              return (
                <div className='flex flex-wrap -ml-3 -mr-5 mb-6' key={idx}>
                  <div className="w-full px-3 md:w-1/3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='name'>
                      Item Name
                    </label>
                    <input 
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="name"
                      data-id={idx}
                      name="name"
                      type="text" 
                      placeholder="Item Name"
                      value={this.state.items_attributes[idx].name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/5 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='quantity'>
                      Quantity
                    </label>
                    <input 
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="quantity"
                      data-id={idx}
                      name="quantity"
                      type="number" 
                      placeholder="0"
                      value={this.state.items_attributes[idx].quantity}
                      onChange={this.handleChange}
                    />
                    
                  </div>
                  <div className="w-full px-3 md:w-1/4 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='price'>
                      Price
                    </label>
                    <input 
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                      id="price"
                      data-id={idx}
                      name="price"
                      type="text" 
                      placeholder="Price"
                      value={this.state.items_attributes[idx].price}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="w-full px-3 md:w-1/5 mb-6 md:mb-0 flex justify-end items-center">
                    {idx === 0 ? (
                        <button onClick={this.addItem}>
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn btn-danger minus-btn" onClick={() => this.deleteItem(idx)}>
                          <i className="fa fa-minus" aria-hidden="true" />
                        </button>
                      )}
                  </div>
                </div>
              )
            })}
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>          
            </form>
          </div>
        
    )
  }
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    postInvoice: (body, accountId) => {
      dispatch(postInvoice(body, accountId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceInput);