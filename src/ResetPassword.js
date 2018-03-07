import React from 'react';
import queryString from 'query-string';
import { resetPassword } from './ajax';

export default class ResetPassword extends React.Component {
  refPassword = ref => this.password = ref
  refPasswordConfirmation = ref => this.password_confirmation = ref

  handleSubmit = async e => {
    e.preventDefault()

    const { reset_password_token } = queryString.parse(this.props.location.search)
    await resetPassword({
      reset_password_token,
      password: this.password.value,
      password_confirmation: this.password_confirmation.value
    })

    this.props.history.replace("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Reset Password</h2>

        <div>
          <input ref={this.refPassword} name="password" type="password" placeholder="Password" />
        </div>

        <div>
          <input ref={this.refPasswordConfirmation} name="password_confirmation" type="password" placeholder="Password Confirmation" />
        </div>

        <button type="submit">Reset Password</button>
      </form>
    )
  }
}
