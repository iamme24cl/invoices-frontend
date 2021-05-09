import React from 'react' 
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends React.Component {

  state = {
    accountname: '',
    password: '',
    address: ''
  }

  handleChange = (event) => {
    // debugger;
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addAccount(this.state)
    this.setState({
      accountname: '',
      password: '',
      address: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Account Name</label><br />
          <input type="text" placeholder="User Name" value={this.state.accountname} name="accountname" onChange={this.handleChange}/><br/>
          <label>Password</label><br/>
          <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/><br/>
          <label>Address</label><br/>
          <textarea placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange}/><br/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountInput);