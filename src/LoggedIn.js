import React from 'react';
import { Link } from 'react-router-dom';
import { current, logIn } from './ajax';

export default class LoggedIn extends React.Component {
  state = { current: null }

  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      this.fetchCurrent()
    }
  }

  fetchCurrent = async (props=this.props) => {
    const { data } = await current();
    this.setState({ current: data })
  }

  refEmail = ref => this.email = ref
  refPassword = ref => this.password = ref

  handleSubmit = async e => {
    e.preventDefault()

    const { data } = await logIn({
      email: this.email.value,
      password: this.password.value
    });

    sessionStorage.setItem("token", data.jwt);
    await this.fetchCurrent()
  }

  handleLogOut = () => {
    sessionStorage.removeItem('token');
    this.setState({ current: null })
  }

  render() {
    const { current } = this.state
    if (current) {
      return this.props.children(current, this.handleLogOut);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>

        <div>
          <input name="email" ref={this.refEmail} type="text" />
        </div>

        <div>
          <input name="password" ref={this.refPassword} type="password" />
        </div>

        <div>
          <button type="submit">Log In</button>
          <Link to="/forgot_password"><small>Forgot Password</small></Link>
        </div>
      </form>
    )
  }
}
