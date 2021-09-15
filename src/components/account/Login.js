import React from 'react' 
import {connect} from 'react-redux'
import {fetchAccount} from '../../actions/fetchAccount'
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    this.props.fetchAccount(this.state)
    this.setState({
      email: '',
      password: '',
    })
    
    this.props.history.push(`/accounts/${this.props.account.id}/invoices`)
  }

  render() {
    return (
      <div className="modal-container login-account-form">
        <div className="form-modal">
          <div className="form-header">
            <h4>Login</h4>
          </div>

          <form onSubmit={this.handleSubmit} className="modal-form" >
            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
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

export default connect(null, {fetchAccount})(Login);