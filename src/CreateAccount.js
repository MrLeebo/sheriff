import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import { createAccount } from './ajax';

export default class CreateAccount extends React.Component {
  refEmail = ref => this.email = ref
  refFirst = ref => this.first_name = ref
  refLast = ref => this.last_name = ref

  handleSubmit = async e => {
    e.preventDefault()
    const { data } = await createAccount({
      id: uuidv4(),
      email: this.email.value,
      first_name: this.first_name.value,
      last_name: this.last_name.value
    })

    console.log(data)
    //sessionStorage.setItem("token", JSON.stringify(data))
    this.props.history.replace("/")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>

        <div>
          <input ref={this.refEmail} type="email" name="email" placeholder="Email" />
        </div>

        <div>
          <input ref={this.refFirst} type="text" name="first_name" placeholder="First Name" />
        </div>

        <div>
          <input ref={this.refLast} type="text" name="last_name" placeholder="Last Name" />
        </div>

        <button type="submit">Create Account</button>
        <Link to="/"><button type="button">Back</button></Link>
      </form>
    )
  }
}
