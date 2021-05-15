import React from 'react' 
import {connect} from 'react-redux'
import {addAccount} from '../../actions/addAccount'

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
      accountname: '',
      password: '',
      address: ''
    })
    
    this.props.history.push(`/accounts`)
  }

  render() {
    return (
      <div className="modal-container">
        <div className="form-modal">
          <div className="form-header">
            <h4>New Account</h4>
          </div>

          <form onSubmit={this.handleSubmit} className="modal-form" >
            <div className="form-group">
              <label>Account Name</label>
              <input type="text" placeholder="User Name" value={this.state.accountname} name="accountname" onChange={this.handleChange} className="form-control"/>

              <label>Password</label>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>

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