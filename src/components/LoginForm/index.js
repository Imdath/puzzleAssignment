import {Component} from 'react'

import './index.css'

// LoginForm component
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  // function to authenticate the user
  submitForm = event => {
    event.preventDefault()
    const {history} = this.props
    history.push('/puzzle')
  }

  // accessing the username from input element and updating the state
  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  // accessing the password from input element and updating the state
  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  // function to render the password input element
  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  // function to render the username input element
  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          className="email-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  // render method to display the login form on the UI
  render() {
    return (
      <div className="login-form-container">
        <h1 className="puzzle-heading">
          SPR<span className="sub-heading">IT</span>LE'S PUZZLE
        </h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
