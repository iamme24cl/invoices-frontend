import React from 'react' 
import {connect} from 'react-redux'
import {editAccount} from '../../actions/editAccount'
import './AccountEdit.css'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props);
    
    let account = this.props.account;

    // console.log(account)

    if (account) {
      this.state = {
        accountname: account.accountname,
        email: account.email,
        address: account.address
      }
    } else {
      this.state = {
        accountname: '',
        email: '',
        address: ''
      }
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
    let account = this.props.account;
    this.props.editAccount(this.state, account.id)
    setTimeout(() => {
      this.props.history.push(`/accounts/${account.id}`)
    }, 1000)
  }

  render() {
    return (
      <div className="modal-container update-account-form">
        <div className="form-modal">
          <div className="form-header">
            <h4>Edit Account</h4>
          </div>

          <form onSubmit={this.handleSubmit} className="modal-form" >
            <div className="form-group">
              <label>Account Name</label>
              <input type="text" placeholder="Account Name" value={this.state.accountname} name="accountname" onChange={this.handleChange} className="form-control"/>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control"/>
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

AccountEdit.defaultProps = {
  accounts: {}
}

export default connect(null, {editAccount})(AccountEdit);