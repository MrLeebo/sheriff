import React from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from './ajax';

export default class ForgotPassword extends React.Component {
  refEmail = ref => this.email = ref

  handlePasswordReset = async e => {
    e.preventDefault()
    await forgotPassword({ email: this.email.value })
  }

  render() {
    return (
      <form onSubmit={this.handlePasswordReset}>
        <h2>Forgot Password</h2>

        <div>
          <input name="email" ref={this.refEmail} type="email" placeholder="Email" />
        </div>

        <div>
          <button type="submit">Reset Password</button>
          <Link to="/"><button type="button">Cancel</button></Link>
        </div>
      </form>
    )
  }
}
