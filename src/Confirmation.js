import React from 'react';
import queryString from 'query-string';
import { confirm } from './ajax';

export default class Confirmation extends React.Component {
  refPassword = ref => this.password = ref
  refPasswordConfirmation = ref => this.password_confirmation = ref

  handleSubmit = async e => {
    e.preventDefault()

    const { confirmation_token } = queryString.parse(this.props.location.search)
    await confirm(confirmation_token, {
      password: this.password.value,
      password_confirmation: this.password_confirmation.value
    })

    this.props.history.replace("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Account Confirmation</h2>

        <div>
          <input ref={this.refPassword} name="password" type="password" placeholder="Password" />
        </div>

        <div>
          <input ref={this.refPasswordConfirmation} name="password_confirmation" type="password" placeholder="Password Confirmation" />
        </div>

        <button type="submit">Confirm</button>
      </form>
    )
  }
}
