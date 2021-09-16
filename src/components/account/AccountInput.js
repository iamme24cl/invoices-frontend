import React from 'react' 
import {connect} from 'react-redux'
import {addAccount} from '../../actions/addAccount'
import './AccountInput.css'

class AccountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountname: '',
      email: '',
      password: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // debugger;
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('a')
    this.props.addAccount(this.state)
    console.log('f')
    this.setState({
      accountname: '',
      email: '',
      password: '',
      address: ''
    })
    setTimeout(() => {
      console.log('g')
      this.props.history.push(`/accounts/${this.props.account.id}/invoices`)
    }, 1000)
  }

  render() {
    return (
      <div className="modal-container new-account-form">
        <div className="form-modal">
          <div className="form-header">
            <h4>New Account</h4>
          </div>

          <form onSubmit={this.handleSubmit} className="modal-form" >
            <div className="form-group">
              <label>Account Name</label>
              <input type="text" placeholder="User Name" value={this.state.accountname} name="accountname" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="User Name" value={this.state.email} name="email" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange} className="form-control"/>
            </div>

            <div className="form-group">
              <input type="submit" className="cta-btn btn btn-dark submit-btn"/>    
            </div>

          </form>

        </div>
        
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountInput);