import React from 'react' 
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountname: '',
      password: '',
      address: ''
    }
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
      name: '',
      password: '',
      address: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <label>Account Name</label><br />
          <input type="text" placeholder="User Name" value={this.state.name} name="name" onChange={this.handleChange} className="form-control"/><br/>
          <label>Password</label><br/>
          <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/><br/>
          <label>Address</label><br/>
          <textarea placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange} className="form-control"/><br/><br/>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountInput);