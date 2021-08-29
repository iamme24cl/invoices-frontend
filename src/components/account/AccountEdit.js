import React from 'react' 
import {connect} from 'react-redux'
import {editAccount} from '../../actions/editAccount'
import './AccountEdit.css'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props);
    
    let account = this.props.account[0];

    // console.log(account)

    if (account) {
      this.state = {
        accountname: account.accountname,
        address: account.address
      }
    } else {
      this.state = {
        accountname: '',
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
    let account = this.props.account[0];
    this.props.editAccount(this.state, account.id)
    this.props.history.push(`/accounts/${account.id}`)
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
              <input type="text" placeholder="User Name" value={this.state.accountname} name="accountname" onChange={this.handleChange} className="form-control"/>
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