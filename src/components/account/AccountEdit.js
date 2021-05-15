import React from 'react' 
import {connect} from 'react-redux'
import {editAccount} from '../../actions/editAccount'

class AccountEdit extends React.Component {
  constructor(props) {
    super(props);
    
    let account = this.props.account;
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
  }

  handleChange = (event) => {
    // debugger;
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let account = {...this.state, id: this.props.account.id}
    this.props.editAccount(account)
    this.setState({
      accountname: '',      
      address: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-group">
          <label>Account Name</label><br />
          <input type="text" placeholder="User Name" value={this.state.accountname} name="accountname" onChange={this.handleChange} className="form-control"/><br/>
          
          <label>Address</label><br/>
          <textarea placeholder="Address" value={this.state.address} name="address" onChange={this.handleChange} className="form-control"/><br/><br/>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

AccountEdit.defaultProps = {
  accounts: {}
}

export default connect(null, {editAccount})(AccountEdit);